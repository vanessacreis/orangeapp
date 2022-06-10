import { useEffect, useId, useState } from "react";
import Card from "../../components/Card/Card";
import { useAppointments } from "../../hooks/useAppointments";
import { api } from "../../services/api";
import { TAppointment, TAppointmentArray } from "../../types/types";
import * as S from "./style";
import emptyImg from "../../assets/images/empty-box.png";
import plusImg from "../../assets/images/plus-icons.svg";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import dayjs from "dayjs";

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
  const [load, setLoad] = useState(false);
  const user = context.states?.user;

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
      <S.Today>
        <h1>Bem vindo {user?.name}!</h1>
        <p>
          Você tem {todayAppointment.length} compromisso(s) agendado(s) para
          hoje.
        </p>
        <S.CardList>
          {load ? (
            <div className="empty">
              <p>Você não tem compromissos hoje!</p>
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
        <div className="box">
          <h2>Todos os compromissos</h2>
          <Button
            className="circle plus"
            onClick={() => setIsModalVisible(true)}
          >
            <img src={plusImg} alt="Incluir novo agendamento" />
          </Button>
        </div>
        <S.CardList>
          {!appointmentsRender ? (
            <div className="empty">
              <p>Opa, não tem nada aqui!</p>
              <img src={emptyImg} alt="Imagem de caixa vazia" />
            </div>
          ) : (
            appointmentsRender.map((appointment: TAppointment) => {
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
