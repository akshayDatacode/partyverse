'use client';
import { useEffect } from "react";
import Link from "next/link";

import Stepper from "@/components/Stepper"
import SelectPartyFilter from "@/module/SearchPartyFilter"
import Button from "@/ui/Button"
import axios from "@/core/axios";
import { useAppDispatch } from "@/core/redux/store";
import { createIncreaseCount } from "../actions/operations";

const HeroSection = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    axios.get('/api/landing-page-data')
      .then(response => {
        console.log("Landing page data:", response.data);
      })
    dispatch(createIncreaseCount(342))
  }, [])

  const steps = [
    { number: 1, label: "Search" },
    { number: 2, label: "Plan a Party" },
    { number: 3, label: "Book" },
  ];

  //const [activeTabIndex, setActiveTabIndex] = useState(0);
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
    <section className="row mx-0 my-md-5 my-3 py-md-5 py-3 align-items-center justify-content-center">
      <div className="col-md-11 col-12">
        <div className="row mx-0 text-center">
          <div className="col-12 py-2">
            <div className="row mx-0 align-items-center justify-content-center mt-3">
              <div className="col-md-6 col-12">
                <Stepper steps={steps} currentStep={2} />
              </div>
            </div>
          </div>
          <div className="col-12 py-3 fw-bold text-dark fs-24 lh-100 ls-0">
            Your <span className="text-highlight">Universe</span> of Stress-Free <span className="text-highlight">Celebrations</span>!
          </div>
          <div className="col-12 py-3 text-dark fw-medium fs-16 lh-100 ls-0">
            <p className="my-0">We’re here to take the chaos out of parties and leave only the fun.</p>
            <p className="my-0">From birthdays and anniversaries to surprise proposals, kitty parties, get together, house parties etc.</p>
          </div>
          <div className="col-12 py-4">
            <div className="row mx-0 w-100 align-items-center justify-content-center">
              <div className="col-lg-9 col-12 bg-white">
                <SelectPartyFilter />
              </div>
            </div>
          </div>
          <div className="col-12 pt-4">
             <Link href="/venues" className="text-decoration-none">
            <Button label="Search Party Places" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection