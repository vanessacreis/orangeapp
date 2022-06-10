import Button from "../Button/Button";
import Input from "../Input/Input";
import editImg from "../../assets/images/edit-icon.svg";
import deleteImg from "../../assets/images/delete-icon.svg";
import * as S from "./style";
import { TAppointment } from "../../types/types";
import { useState } from "react";
import {
  dateObjectFormat,
  datetimeFormatInput,
} from "../../utils/datetimeFormatInput";

interface IModalProps {
  type?: string;
  onClose: any;
  appointment: TAppointment;
  buttonSave: (appointment: TAppointment) => void;
  buttonDelete: (id?: any) => void;
}

const Modal = ({
  type,
  buttonSave,
  onClose,
  appointment,
  buttonDelete,
}: IModalProps) => {
  const [appointmentState, setAppointmentState] = useState(appointment);
  const isNew = type === "new" ? "Novo" : "Editar";

  function handleSetAppointment(key: string, value: string | object) {
    setAppointmentState((prev) => {
      return { ...prev, [key]: value };
    });
  }

  const handleOutsideClick = (e: any) => {
    if (e.target.id === "modal") {
      onClose();
    }
  };

  return (
    <S.Container id="modal" onClick={handleOutsideClick}>
      <S.Modal>
        <button className="close" onClick={onClose} />
        <S.Content>
          <h3>{isNew} agendamento</h3>
          <Input
            width={55}
            placeholder="Nome do compromisso"
            id="title"
            type="text"
            value={appointmentState.title}
            onChange={(e) => handleSetAppointment("title", e.target.value)}
          />
          <Input
            width={55}
            placeholder="Descrição"
            id="description"
            type="text"
            value={appointmentState.description}
            onChange={(e) =>
              handleSetAppointment("description", e.target.value)
            }
          />
          <div className="time">
            <Input
              width={25}
              placeholder="Data de início"
              id="startTime"
              type="datetime-local"
              value={datetimeFormatInput(
                appointmentState.start.day,
                appointmentState.start.time
              )}
              onChange={(e) =>
                handleSetAppointment("start", dateObjectFormat(e.target.value))
              }
            />
            <Input
              width={25}
              placeholder="Data de término"
              id="endTime"
              type="datetime-local"
              value={datetimeFormatInput(
                appointmentState.end.day,
                appointmentState.end.time
              )}
              onChange={(e) =>
                handleSetAppointment("end", dateObjectFormat(e.target.value))
              }
            />
          </div>
          <div className="buttons">
            <Button
              className="circle"
              onClick={() => buttonDelete(appointment.id)}
            >
              <img src={deleteImg} alt="Botão para deletar agendamento" />
            </Button>
            <Button
              className="circle"
              onClick={() => buttonSave(appointmentState)}
            >
              <img
                src={editImg}
                alt="Botão para confirmar edição do agendamento"
              />
            </Button>
          </div>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default Modal;
