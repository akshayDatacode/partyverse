import './button.scss'

type ButtonProps = {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <>
      <button type="button" className="btn custom-button-primary">
        {label}
      </button>
    </>
  )
}

export default Button