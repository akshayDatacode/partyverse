import Stepper from "@/components/Stepper"
import Tab from "@/components/Tab";
import SelectPartyFilter from "@/module/SearchPartyFilter"
import Button from "@/ui/Button"
import { useState } from "react";

const HeroSection = () => {
  const steps = [
    { number: 1, label: "Search" },
    { number: 2, label: "Plan a Party" },
    { number: 3, label: "Book" },
  ];

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      onClick: () => console.log("Tab 1 clicked"),
    },
    {
      label: "Tab 2",
      onClick: () => console.log("Tab 2 clicked"),
    },
    {
      label: "Tab 3",
      onClick: () => console.log("Tab 3 clicked"),
    },
  ];

  return (
    <section className="mx-0 hero-section">
      <div className=" my-4 row mx-0 text-center">
        <div className="col-12 my-2">
          <Stepper steps={steps} currentStep={2} />
        </div>
        <h1 className="hero-heading px-3 col-12 my-4">
          Your <span className="text-highlight">Universe</span> of Stress-Free <span className="text-highlight">Celebrations</span>!
        </h1>
        <div className="col-12 my-4 px-4 hero-content">
          <p className="my-0">We’re here to take the chaos out of parties and leave only the fun.</p>
          <p className="my-0">From birthdays and anniversaries to surprise proposals, kitty parties, get together, house parties etc.</p>
        </div>
        <div className="col-12 my-4">
          <div className="row mx-0 hero-select">
          <div className="col-lg-8 col-12 bg-white">
            <SelectPartyFilter />
          </div>
          </div>
        </div>
        <div className="my-4 col-12">
          <Button label="Search Party Places" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection