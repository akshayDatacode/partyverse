import './button.scss'

type ButtonProps = {
  label: string;
  backgroundColor?: string;
}

const Button = ({ label , backgroundColor=""}: ButtonProps) => {
  return (
    <>
      <button type="button" className={`btn custom-button-primary ${backgroundColor === "white"? "bg-white-btn p-md-2 p-1":""} ${backgroundColor === "transparent"? "bg-transparent-btn p-md-2 p-1":""}`}>
        {label}
      </button>
    </>
  )
}

export default Button