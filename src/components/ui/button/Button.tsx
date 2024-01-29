import { PropsWithChildren } from "react";
import styles from "./Button.module.scss";

const Button: React.FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <button className="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
