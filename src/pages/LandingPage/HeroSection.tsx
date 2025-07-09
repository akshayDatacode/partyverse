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
      <div className="col-12 px-0 text-center">
        <h1 className="hero-heading">
          Your <span className="text-highlight">Universe</span> of Stress-Free <span className="text-highlight">Celebrations</span>!
        </h1>
        <h2 className="text-light">
          🎉 Planning a Party?
        </h2>
        <Stepper steps={steps} currentStep={2} />
        <SelectPartyFilter />
        <Button label="Find Your Party" />
      </div>
    </section>
  )
}

export default HeroSection