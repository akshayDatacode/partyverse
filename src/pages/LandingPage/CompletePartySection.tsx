import { useState } from "react";
import Tab from "@/components/Tab"; 
import "bootstrap-icons/font/bootstrap-icons.css";

// Data for each category
const categoryData = {
  Decoration: [
    {
      title: "Elegant Balloon Arches",
      description:
        "Make your entrance unforgettable with artistically crafted balloon arches tailored to your event's theme.",
    
    },
    {
      title: "Themed Backdrops",
      description:
        "Add visual charm to your photos, entrances, and stage with backdrops tailored to your event's style and theme.",
      subtitle: "Custom-Made for Your Event Theme",
    },
    {
      title: "Flower Arrangements",
      description:
        "Enhance your event's atmosphere with handcrafted floral centerpieces tailored to your theme, palette, and table layout.",
      subtitle: "Custom-Made for Your Event Theme",
    },
  ],
  Photography: [
    {
      title: "Professional Photography",
      description:
        "Capture memories with high-quality, professional photos throughout the event.",
    },
    {
      title: "Instant Photo Booth",
      description:
        "Fun and interactive photo booth with instant printouts for guests.",
    },
    {
      title: "Video Coverage",
      description:
        "Relive your event with full HD video coverage of every moment.",
    },
  ],
  Activities: [
    {
      title: "Games & Fun Activities",
      description:
        "Keep the guests engaged with interactive games and activities.",
    },
    {
      title: "Magic Shows",
      description: "Add excitement with a thrilling magic performance.",
    },
    {
      title: "DIY Craft Corners",
      description: "Creative zones for kids and adults to make souvenirs.",
    },
  ],
  Cakes: [
    {
      title: "Theme Cakes",
      description: "Customized cakes matching your event’s theme and flavor.",
    },
    {
      title: "Cupcake Tower",
      description: "Beautifully designed cupcakes arranged in a fancy tower.",
    },
    {
      title: "Live Cake Counter",
      description: "Freshly prepared cakes at the venue for your guests.",
    },
  ],
  ReturnGifts: [
    {
      title: "Personalized Return Gifts",
      description: "Custom gifts that your guests will remember.",
    },
    {
      title: "Eco-friendly Hampers",
      description: "Sustainable and thoughtful gift options.",
    },
    {
      title: "Goodie Bags for Kids",
      description: "Fun items packed for children attending the event.",
    },
  ],
  Entry: [
    {
      title: "Red Carpet Welcome",
      description: "Give your guests a grand entry experience.",
    },
    {
      title: "Theme Gate Decor",
      description: "Custom-designed gate that matches your event theme.",
    },
    {
      title: "Welcome Drink Station",
      description: "Refresh your guests right at the entrance.",
    },
  ],
  Artists: [
    {
      title: "Live Singers",
      description: "Create the perfect vibe with live musical performances.",
    },
    {
      title: "Dance Troupes",
      description: "Energetic and themed dance performances.",
    },
    {
      title: "Anchor / Emcee",
      description: "Professional hosts to keep your event flowing smoothly.",
    },
  ],
};

const CompletePartySection = () => {
  const categories = Object.keys(categoryData);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const tabItems = categories.map((label, index) => ({
    label,
    onClick: () => setActiveCategory(label),
  }));

  return (
    <section className="row mx-0 my-5 py-5 d-flex justify-content-center">
      <div className="col-md-11 col-12">
        <div className="row mx-0">
          <div className="col-12 px-3 px-md-2">
            <h1 className="custom-title">
              Complete Your <span>Party</span>
            </h1>
            <p className="mb-4 custom-content">
              Customise your perfect party with our premium add-ons and services
            </p>

            {/* Tab Component */}
            <Tab
              tabs={tabItems}
              activeTabIndex={activeIndex}
              onTabChange={setActiveIndex}
            />

            {/* Cards for the selected tab */}
            <div className="row mx-0 gx-2 mt-5">
              {categoryData[activeCategory]?.map((item, index) => (
                <div className="col-md-4 px-0 mb-0" key={index}>
                  <div className="p-5 party-cards">
                    <h5 className="mb-2 party-heading">{item.title}</h5>
                    <p className="mb-0 party-content">{item.description}</p>
                    {item.subtitle && <div className="d-flex align-items-center gap-2">
                        <i className="bi bi-check-circle-fill" style={{ fontSize: "14px" , color:" #6658DE"}} ></i>
                      <small className="py-3" style={{fontSize:"12px"}}>{item.subtitle}</small>
                    </div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletePartySection;
