import Stepper from "@/components/Stepper"
import SelectPartyFilter from "@/module/SearchPartyFilter"
import Button from "@/ui/Button"

const HeroSection = () => {
  const steps = [
    { number: 1, label: "Step 1" },
    { number: 2, label: "Step 2" },
    { number: 3, label: "Step 3" },
  ];
  return (
    <section className="row mx-0 hero-section">
      <div className="col-12 my-0 px-0 text-center">
        <div className="mb-4">
        <Stepper steps={steps} currentStep={2} />
        </div>
        <h1 className="hero-heading">
          Your <span className="text-highlight">Universe</span> of Stress-Free <span className="text-highlight">Celebrations</span>!
        </h1>
        <h2 className="text-light">
          🎉 Planning a Party?
        </h2>
        <div className="col-12 mt-4 hero-content">
        <p className="my-0">We’re here to take the chaos out of parties and leave only the fun.</p>
        <p className="my-0">From birthdays and anniversaries to surprise proposals, kitty parties, get together, house parties etc.</p>
        </div>
        <div className="hero-select">
        <SelectPartyFilter />
        </div>
        <Button label="Find Your Party" />
      </div>
    </section>
  )
}

export default HeroSection