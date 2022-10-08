import View from "./view";

export type ButtonType = {
  id?: string;
  className?: string;
  type?: "primary" | "secondary" | "link";
  label: string;
  onClickButton?: () => void;
};

const Button = ({id, className, type = "primary", label, onClickButton }: ButtonType) => {
  return <View id={id} className={className} type={type} label={label} onClickButton={onClickButton} />;
};

export default Button;
