import { InputHTMLAttributes } from "react";
import * as S from "./style";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  width: number;
  textLabel: string;
};

const Input = ({ width, textLabel, ...props }: InputProps) => {
  return (
    <S.Box>
      <label>{textLabel}</label>
      <S.Input style={{ width: `${width}rem` }} {...props} />
    </S.Box>
  );
};

export default Input;
