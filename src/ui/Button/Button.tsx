import './button.scss'

type ButtonProps = {
  label: string;
  backgroundColor?: string;
  borderColor?: string;
}

const Button = ({ label , backgroundColor="", borderColor=""}: ButtonProps) => {
  return (
    <>
      <button type="button" className={`btn custom-button-primary 
        ${backgroundColor === "white"? "bg-white-btn p-md-2 p-1":""} 
        ${backgroundColor === "transparent"? "bg-transparent-btn p-md-2 p-1":""}
        ${borderColor === "primary" ? "border-primary":""}`}>
        {label}
      </button>
    </>
  )
}

export default Button