import { useState } from "react";
import { motion } from "framer-motion";
import editImg from "../../assets/images/edit-icon.svg";
import deleteImg from "../../assets/images/delete-icon.svg";
import { TAppointment } from "../../types/types";
import * as S from "./style";

type TCardProps = {
  appointment: TAppointment;
};

const Card = ({ appointment }: TCardProps) => {
  return (
    <S.CardBox>
      <h3 className="title">{appointment.title}</h3>
      <p className="date">
        Começa as {appointment.startTime} até {appointment.endTime}
      </p>
      <S.Details>
        <summary>Expandir</summary>
        <p className="description">{appointment.description}</p>
        <button>
          <img className="iconBtn" src={editImg} alt="Editar compromisso" />
        </button>
        <button>
          <img className="iconBtn" src={deleteImg} alt="Deletar compromisso" />
        </button>
      </S.Details>
    </S.CardBox>
  );
};

export default Card;
