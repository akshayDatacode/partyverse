import './button.scss'

type ButtonProps = {
  label: React.ReactNode | string;
  backgroundColor?: string;
  borderColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button = ({ label , backgroundColor="", borderColor="", type='button'}: ButtonProps) => {
  return (
    <>
      <button type={type} className={`p-2 fw-bold fs-16 lh-100 ls-0 custom-button-primary
        ${backgroundColor === "white"? "bg-white-btn":""} 
        ${backgroundColor === "transparent"? "bg-transparent-btn":""}
        ${borderColor === "primary" ? "border-primary":""}`}
        >
        {label}
      </button>
    </>
  )
}

export default Button