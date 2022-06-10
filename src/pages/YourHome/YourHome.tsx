import { useEffect, useState } from "react";
import { useAppointments } from "../../hooks/useAppointments";
import { TAppointment, TAppointmentArray } from "../../types/types";
import Card from "../../components/Card/Card";
import * as S from "./style";
import emptyImg from "../../assets/images/empty-box.png";
import plusImg from "../../assets/images/plus-icons.svg";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import dayjs from "dayjs";
import { ToastContainer } from "react-toastify";

const initialAppointment: TAppointment = {
  id: 0,
  uuid: "",
  title: "",
  description: "",
  createdAt: dayjs(new Date()).format("MMM DD YYYY HH:mm"),
  start: {
    day: "",
    time: "",
  },
  end: {
    day: "",
    time: "",
  },
};

const YourHome = () => {
  const context = useAppointments();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const appointments = context.states?.appointments;
  const [appointmentsRender, setAppointmentsRender] =
    useState<any>(appointments);
  const [todayAppointment, settodayAppointment] = useState<any>(appointments);
  const user = context.states?.user;
  const [input, setInput] = useState("");

  function handlePostAppointment(appointment: TAppointment) {
    context.actions?.handleCreateAppointment(appointment);
    setAppointmentsRender([...appointmentsRender, appointment]);
    setIsModalVisible(false);
  }

  function handleDeleteAppointment(id: number) {
    context.actions?.handleDeleteAppointment(id);
    const filtered = appointments?.filter((app) => app.id != id);
    setAppointmentsRender(filtered);
    setIsModalVisible(false);
  }

  function handleTodayAppointments(appointments?: TAppointmentArray) {
    const today = dayjs(new Date()).format("YYYY-MM-DD");
    if (!!appointments) {
      const todayAppointments = appointments.filter(
        (appointment: TAppointment) => appointment.start.day === today
      );
      settodayAppointment(todayAppointments);
    }
  }

  useEffect(() => {
    handleTodayAppointments(appointments);
    setAppointmentsRender(appointments);
  }, [appointments]);

  return (
    <S.Container>
      <S.Today className="animate__animated animate__fadeInLeft ">
        <h1>Bem vindo {user?.name}!</h1>
        <p>
          Você tem {todayAppointment.length} compromisso(s) agendado(s) para
          hoje.
        </p>
        <S.CardList>
          {todayAppointment.length === 0 ? (
            <div className="empty">
              <img src={emptyImg} alt="Imagem de caixa vazia" />
            </div>
          ) : (
            todayAppointment.map((appointment: TAppointment) => {
              return (
                <Card
                  key={appointment.id}
                  appointment={appointment}
                  buttonDelete={handleDeleteAppointment}
                />
              );
            })
          )}
        </S.CardList>
      </S.Today>
      <S.Schedules>
        <ToastContainer />
        <div className="box">
          <h2>Todos os compromissos</h2>
          <Button
            className="circle plus"
            onClick={() => setIsModalVisible(true)}
          >
            <img src={plusImg} alt="Incluir novo agendamento" />
          </Button>
        </div>
        <input
          className="search"
          placeholder="Pesquise pelo nome do agendamento"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <S.CardList className="animate__animated animate__fadeInUp ">
          {appointmentsRender.length === 0 ? (
            <div className="empty">
              <p>Opa, você ainda não adicionou nenhum compromisso.</p>
              <img src={emptyImg} alt="Imagem de caixa vazia" />
            </div>
          ) : (
            appointmentsRender
              .filter((app: TAppointment) => {
                if (input === "") {
                  return app;
                } else if (
                  app.title.toLowerCase().includes(input.toLowerCase())
                ) {
                  return app;
                }
              })
              .map((appointment: TAppointment) => {
                return (
                  <Card
                    key={appointment.id}
                    appointment={appointment}
                    buttonDelete={handleDeleteAppointment}
                  />
                );
              })
          )}
        </S.CardList>
        {isModalVisible && (
          <Modal
            buttonDelete={() => console.log()}
            type="new"
            onClose={() => setIsModalVisible(false)}
            buttonSave={handlePostAppointment}
            appointment={initialAppointment}
          />
        )}
      </S.Schedules>
    </S.Container>
  );
};

export default YourHome;
