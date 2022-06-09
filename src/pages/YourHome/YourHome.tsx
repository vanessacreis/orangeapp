import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useAppointments } from "../../hooks/useAppointments";
import { api } from "../../services/api";
import { TAppointment } from "../../types/types";
import * as S from "./style";
import emptyImg from "../../assets/images/empty-box.png";

const YourHome = () => {
  const [appointments, setAppointments] = useState([]);
  const context = useAppointments();
  const user = context.states?.user;

  const request = async () => {
    const response = await api.get("/appointments");
    const { data } = response;
    const filtered = data.filter(
      (appointment: TAppointment) => appointment.uuid === user?.uuid
    );
    setAppointments(filtered);
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <S.Container>
      <S.Today>
        <h1>Bem vindo {user?.name}!</h1>
        <p>Você tem 2 compromissos agendados para hoje.</p>
        <S.CardList>
        {!appointments ? (
            <div className="empty">
              <p>Opa, não tem nada aqui!</p>
              <img src={emptyImg} alt="Imagem de caixa vazia" />
            </div>
          ) : (
            appointments.map((appointment: TAppointment) => {
              return <Card key={appointment.id} appointment={appointment} />;
            })
          )}

        </S.CardList>
      </S.Today>
      <S.Schedules>
        <h2>Todos os compromissos</h2>
        <S.CardList>
          {!appointments ? (
            <div className="empty">
              <p>Opa, não tem nada aqui!</p>
              <img src={emptyImg} alt="Imagem de caixa vazia" />
            </div>
          ) : (
            appointments.map((appointment: TAppointment) => {
              return <Card key={appointment.id} appointment={appointment} />;
            })
          )}
        </S.CardList>
      </S.Schedules>
    </S.Container>
  );
};

export default YourHome;
