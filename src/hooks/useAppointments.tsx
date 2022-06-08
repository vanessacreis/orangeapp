import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { isAuth } from "../routes/auth";
import { api } from "../services/api";
import { TUser } from "../types/types";

interface IActions {
  handleLogin: (id: string, password: string) => string | any;
  handleCreateNewUser: (data: TUser) => void;
  handleLogout: () => void;
}

interface IStates {
  user: TUser;
}

interface IAppointmentsContext {
  actions?: IActions;
  states?: IStates;
}

interface IProviderAppointmentsProps {
  children: ReactNode;
}

const initialUser: TUser = {
  uuid: "",
  email: "",
  id: "",
  password: "",
  name: "",
  avatar: "",
};

function useProviderAppointments(): IAppointmentsContext {
  const [user, setUser] = useState<TUser>(initialUser);
  const navigate = useNavigate();

  async function handleCreateNewUser(data: TUser) {
    const body = {
      ...data,
      avatar: "../assets/images/user.png",
    };
    try {
      const response = await api.post("/users", body);
      isAuth();
      handleLogin(body.id, body.password);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleLogin(id: string, password: string) {
    try {
      const response = await api.get(`/users/${id}`);
      console.log(response);
      const { data } = response;
      if (data.password === password) {
        localStorage.setItem("id", data.id);
        localStorage.setItem("uuid", data.uuid);
        isAuth();
        setUser({ ...data });
        navigate(`/yourhome/${id}`);
      } else {
        throw new Error("senha invalida!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleLogout() {
    localStorage.clear();
    setUser(initialUser);
    navigate("/");
  }

  useEffect(() => {
    if (isAuth()) {
      const requestUser = async () => {
        const id = localStorage.getItem("id");
        const response = await api.get(`/users/${id}`);
        const { data } = response;
        setUser({ ...data });
        navigate(`/yourhome/${id}`);
      };
      requestUser();
    }
  }, []);

  const actions = {
    handleCreateNewUser,
    handleLogin,
    handleLogout,
  };
  const states = {
    user,
  };
  return { actions, states };
}

const AppointmentsContexts = createContext<IAppointmentsContext>({});

export function useAppointments(): IAppointmentsContext {
  return useContext(AppointmentsContexts);
}

export function ProviderAppointments({ children }: IProviderAppointmentsProps) {
  const appointments = useProviderAppointments();
  return (
    <AppointmentsContexts.Provider value={appointments}>
      {children}
    </AppointmentsContexts.Provider>
  );
}
