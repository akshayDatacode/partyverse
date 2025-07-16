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
      <div className="row mx-0 d-flex justify-content-center align-items-center">
        <div className="col-md-11">
          <div className="row mx-0 my-3">
            <h4 className="amenities-heading pb-2">Amenities</h4>
            {AmenitiesData.map((data, index) => {
              return (
                <>
                  <div className="col-12 py-2" key={index}>
                    <h6 className="amenities-sub-heading py-2">
                      {data.mainHeading}
                    </h6>
                    <div className="d-flex">
                      {data.badgesData.map((item, i) => {
                        return (
                          <span className="" key={i}>
                            <span className="p-2 me-2 amenities-badge">
                              {" "}
                              {item.data}{" "}
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default AmenitiesSection;
