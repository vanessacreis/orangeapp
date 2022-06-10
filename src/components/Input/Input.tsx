import { InputHTMLAttributes } from "react";
import * as S from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  width: number;
  textLabel?: string;
}

const Input = ({ width, textLabel, ...props }: InputProps) => {
  return (
    <S.Box>
      <label htmlFor={props.id}>{textLabel}</label>
      <S.Input style={{ width: `${width}rem` }} {...props} />
    </S.Box>
  );
};

export default Input;
