import './button.scss'

type ButtonProps = {
  label: string;
  backgroundColor?: string;
}

const Button = ({ label , backgroundColor=""}: ButtonProps) => {
  return (
    <>
      <button type="button" className={`btn custom-button-primary ${backgroundColor === "white"? "bg-white-btn":""} ${backgroundColor === "transparent"? "bg-transparent-btn":""}`}>
        {label}
      </button>
    </>
  )
}

export default Button