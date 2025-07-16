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
      <div className="row mx-0 d-flex justify-content-center align-items-center">
        <div className="col-md-11">
          <div className="row mx-0 py-3">
            {/* Key highlight */}
            <div className="col-2">
              <h5 className="key-highlight">Key highlights</h5>
              <div className="row mx-0">
                <div className="col-12 p-0">
                  <div className="row mx-0">
                    {HighlightIconData.map((data, index) => {
                      return (
                        <div
                          className="col-6 d-flex flex-column align-items-center ps-0 text-start justify-content-center my-2"
                          key={index}
                        >
                          <div className="highlight-icons p-3 my-2">
                            <Image src={data.ImageUrl} alt="capacityIcon" />
                          </div>
                          <div className="d-flex flex-column align-items-center justify-content-center">
                            <div className="highlight-icons-data fw-bold">
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
            <div className="col-md-9 px-5">
              <div className="row mx-0 d-flex justify-content-end align-item-center border-start ps-5">
                {videoData.map((data, index) => {
                  return (
                    <div className="col-md-6 col-12" key={index}>
                      <h5>{data.heading}</h5>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyHighlightSection;
