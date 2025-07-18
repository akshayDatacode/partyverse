import './button.scss'

type ButtonProps = {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Button = ({ label , backgroundColor="", borderColor=""}: ButtonProps) => {
  return (
    <>
      <button type="button" className={`p-2 fw-bold fs-16 lh-100 ls-0 custom-button-primary
        ${backgroundColor === "white"? "bg-white-btn":""} 
        ${backgroundColor === "transparent"? "bg-transparent-btn":""}
        ${borderColor === "primary" ? "border-primary":""}`}>
        {label}
      </button>
    </>
  )
}

export default Button