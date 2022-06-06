import { ButtonHTMLAttributes } from "react";
import * as S from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  className: string;
};

const Button = ({ className, ...props }: ButtonProps) => {
  return <S.Button className={className} {...props} />;
};

export default Button;
