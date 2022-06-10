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
import { TAppointment, TAppointmentArray, TUser } from "../types/types";

interface IActions {
  handleCreateAppointment: (appointment: TAppointment) => void;
  handleLogin: (id: string, password: string) => string | any;
  handleGetAppointments: (uuid?: string) => void;
  handleCreateNewUser: (data: TUser) => void;
  handleDeleteAppointment: (id: number) => void;
  handleLogout: () => void;
}

interface IStates {
  user: TUser;
  appointments?: TAppointment[];
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

const initialAppointment: TAppointmentArray = [];

function useProviderAppointments(): IAppointmentsContext {
  const [user, setUser] = useState<TUser>(initialUser);
  const [appointments, setAppointments] =
    useState<TAppointmentArray>(initialAppointment);
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
      const { data } = response;
      if (data.password === password) {
        localStorage.setItem("id", data.id);
        localStorage.setItem("uuid", data.uuid);
        const uuid = data.uuid;
        isAuth();
        setUser({ ...data });
        navigate(`/yourhome/${id}`);
        handleGetAppointments(uuid);
      } else {
        throw new Error("senha invalida!");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleGetAppointments(uuid?: string) {
    const uuidUser = uuid || user.uuid;
    const response = await api.get("/appointments");
    const { data } = response;
    const filtered = await data.filter(
      (appointment: TAppointment) => appointment.uuid === uuidUser
    );
    setAppointments(filtered);
  }

  async function handleCreateAppointment(appointment: TAppointment) {
    try {
      const body = { ...appointment, uuid: user.uuid };
      delete body.id;
      const response = await api.post("/appointments", body);
      if (response.status === 201) {
        navigate(`/yourhome/${user.id} `);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeleteAppointment(id?: number) {
    try {
      const response = await api.delete(`/appointments/${id}`);
      console.log(response);
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
        handleGetAppointments(data.uuid);
      };
      requestUser();
    }
  }, []);

  const actions = {
    handleCreateAppointment,
    handleCreateNewUser,
    handleGetAppointments,
    handleDeleteAppointment,
    handleLogin,
    handleLogout,
  };
  const states = {
    user,
    appointments,
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
