import editImg from "../../assets/images/edit-icon.svg";
import deleteImg from "../../assets/images/delete-icon.svg";
import { TAppointment } from "../../types/types";
import * as S from "./style";
import { useState } from "react";
import Modal from "../Modal/Modal";
import { api } from "../../services/api";

type TCardProps = {
  appointment: TAppointment;
  buttonDelete: (id: number) => void;
};

const Card = ({ appointment, buttonDelete }: TCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [appointmentState, setAppointmentState] = useState(appointment);

  async function handleSaveUpdate(appointment: TAppointment) {
    setAppointmentState(appointment);
    setIsModalVisible(false);
    try {
      const response = await api.put(
        `/appointments/${appointment.id}`,
        appointment
      );
    } catch (error) {
      throw new Error("Não rolou");
    }
  }

  return (
    <S.CardBox>
      <div>
        <h3 className="title">{appointmentState.title}</h3>
        <p className="date">{appointmentState.start.day}</p>
      </div>
      <p className="hour">
        Começa as {appointmentState.start.time} até {appointmentState.end.time}
      </p>
      <S.Details>
        <summary>Expandir</summary>
        <p className="description">{appointmentState.description}</p>
        <div className="edit">
          <p className="createdAt">Inserido em {appointmentState.createdAt}</p>
          <button className="iconBtn" onClick={() => setIsModalVisible(true)}>
            <img src={editImg} alt="Editar compromisso" />
          </button>
        </div>
        {isModalVisible && (
          <Modal
            buttonSave={handleSaveUpdate}
            appointment={appointment}
            onClose={() => setIsModalVisible(false)}
            buttonDelete={buttonDelete}
          />
        )}
      </S.Details>
    </S.CardBox>
  );
};

export default Card;
