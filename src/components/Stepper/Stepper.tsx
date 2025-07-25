import './style.scss';

type Step = {
  number: number;
  label: string;
};

type StepperProps = {
  steps: Step[];
  currentStep: number;
};

const Stepper = ({ steps, currentStep }: StepperProps) => {
  return (
    <div className='row mx-0 d-flex align-items-center justify-content-center'>
    <div className="stepper col-12">
      {steps.map((step, index) => (
        <div key={step.number} className="stepper-item">
          <div className="stepper-content">
            <div className="stepper-number-wrapper">
              <div
                className={`stepper-number fs-16 lh-100 ls-0 ${currentStep >= step.number ? 'active' : ''}`}
              >
                {step.number}
              </div>
              <div className="mt-2 stepper-label lh-100 ls-0">{step.label}</div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`stepper-line ${currentStep > step.number ? 'completed' : 'dotted'}`}
              ></div>
            )}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Stepper;
