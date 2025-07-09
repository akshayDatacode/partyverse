import './style.scss';

type Step = {
  number: number;
  label: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number; // To indicate the active step
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div key={step.number} className="stepper-item">
          <div
            className={`stepper-number ${currentStep === step.number ? "active" : ""
              }`}
          >
            {step.number}
          </div>
          <div className="stepper-label">{step.label}</div>
          {/* Render the line only if it's not the last step */}
          {index < steps.length - 1 && (
            <div
              className={`stepper-line ${currentStep > step.number ? "completed" : "dotted"
                }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;