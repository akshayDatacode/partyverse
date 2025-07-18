import './button.scss'

type ButtonProps = {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Button = ({ label , backgroundColor="", borderColor=""}: ButtonProps) => {
  return (
    <>
      <button type="button" className={`custom-button-primary py-2 px-3 
        ${backgroundColor === "white"? "bg-white-btn":""} 
        ${backgroundColor === "transparent"? "bg-transparent-btn":""}
        ${borderColor === "primary" ? "border-primary":""}`}>
        {label}
      </button>
    </>
  )
}

export default Button