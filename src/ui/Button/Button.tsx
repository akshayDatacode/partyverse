import "./button.scss";

type ButtonProps = {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  borderRadius?: string;
  padding?: string;
};

const Button = ({
  label,
  backgroundColor = "",
  borderColor = "",
  type = "button",
  fullWidth = false,
  borderRadius = "rounded-2",
  padding = "p-2",
}: ButtonProps) => {
  return (
    <>
      <button
        type={type}
        className={`p-2 fw-bold fs-16 lh-100 ls-0 custom-button-primary
        ${backgroundColor === "white" ? "bg-white-btn" : ""} 
        ${backgroundColor === "transparent" ? "bg-transparent-btn" : ""}
        ${borderColor === "primary" ? "border-primary" : ""}
         ${fullWidth ? "w-100" : ""}
          ${borderRadius}
          ${padding}`}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
