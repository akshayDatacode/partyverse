import BadgeTag from "@/components/BadgeTag";

const AmenitiesData = [
  {
    mainHeading: "EXPERIENCES",
    badgesData: [
      {
        data: "Romantic Dining",
        icon: "",
      },
      {
        data: "Serves Cocktails",
        icon: "",
      },
      {
        data: "Live Sports Screening",
        icon: "",
      },
      {
        data: "Live Music",
        icon: "",
      },
    ],
  },
  {
    mainHeading: "AMBEMINCE",
    badgesData: [
      {
        data: "Rooftop",
        icon: "",
      },
      {
        data: "Outdoor Seating",
        icon: "",
      },
      {
        data: "Indoor Seating",
        icon: "",
      },
      {
        data: "Smoking Area",
        icon: "",
      },
      {
        data: "Lakeside View",
        icon: "",
      },
    ],
  },
  {
    mainHeading: "FOOD AND BEVERAGES OPTIONS",
    badgesData: [
      {
        data: "Full Bar Available",
        icon: "",
      },
      {
        data: "Vegan Options",
        icon: "",
      },
      {
        data: "Gluten Free Options",
        icon: "",
      },
    ],
  },
];

const AmenitiesSection = () => {
  return (
    <>
      <div className="row mx-0 py-md-5 py-3 amenities">
        <h4 className="amenities-heading py-2">Amenities</h4>
        {AmenitiesData && AmenitiesData.map((data, index) => {
          return (
            <>
              <div className="col-12 py-2 my-1" key={index}>
                <h6 className="amenities-sub-heading">
                  {data.mainHeading}
                </h6>
                <div className="d-flex flex-wrap py-1 ">
                  {data?.badgesData.map((item, i) => {
                    return (
                      <span key={i} className="py-1">
                        <BadgeTag label={item.data} />
                      </span>
                    );
                  })}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default AmenitiesSection;
