import Image, { StaticImageData } from "next/image";

type HighlightIconDataPropsType = {
  ImageUrl: StaticImageData;
  IconData: string;
  IconSubData: string;
};
type videoDataPropsType = {
  heading: string;
  image: StaticImageData;
};

const KeyHighlightSection = ({
  HighlightIconData,
  videoData,
}: {
  HighlightIconData: HighlightIconDataPropsType[];
  videoData: videoDataPropsType[];
}) => {
  return (
    <>
      <section className="row mx-0 py-1">
        {/* Key highlight */}
        <div className="col-xxl-2 col-lg-3 col-md-4 col-12 px-0 mx-0">
          <h5 className="mx-0 px-0 text-md-start text-center key-highlight-heading ">Key highlights</h5>
          <div className="row mx-0">
            <div className="col-12 p-0">
              <div className="row mx-0">
                { HighlightIconData && HighlightIconData.map((data, index) => {
                  return (
                    <div
                      className="col-6 my-2 ps-0 d-flex flex-column align-items-center text-start justify-content-center"
                      key={index}
                    >
                      <div className="my-2 p-3 highlight-icons">
                        <Image src={data.ImageUrl} alt="capacityIcon"/>
                      </div>
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <div className="fw-bold highlight-icons-data">
                          {data.IconData}
                        </div>
                        <div className="highlight-icons-subdata">
                          {data.IconSubData}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* video */}
        <div className="col-xxl-10 col-lg-9 col-md-8 col-12 mx-0 my-3 px-0">
          <div className="row mx-0 px-lg-5 px-0 party-videos">
            {videoData.map((data, index) => {
              return (
                <div className="col-md-6 col-12 px-md-2 px-0 my-md-0 my-3 d-flex flex-column justify-content-md-end justify-content-center align-items-center" key={index}>
                  <h5 className="text-md-start text-center w-100 px-2 key-highlight-heading">{data.heading}</h5>
                  <Image
                    src={data.image}
                    alt={`${data.image}`}
                    className="img-fluid rounded-4"
                    style={{ height: "423px", width: "460px" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default KeyHighlightSection;
