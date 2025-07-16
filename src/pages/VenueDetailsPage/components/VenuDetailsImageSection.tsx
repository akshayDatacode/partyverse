import Image from "next/image";
import { StaticImageData } from "next/image";

type ImageDataType = {
  parentImage: StaticImageData;
  childrenImage: StaticImageData[];
};

const VenuDetailsImageSection = ({
  imageData,
}: {
  imageData: ImageDataType[];
}) => {
  return (
    <>
		<div className="row mx-0 d-flex justify-content-center align-items-center">
        <div className="col-md-11">
      <div className="row mx-0">
        {imageData.map((data, index) => {
          return (
            <>
              <div className="col-md-6 col-12 py-2" key={index}>
                <Image
                  src={data.parentImage}
                  alt="Venue 1"
                  className="img-fluid w-100 h-100 venue-details-main-image"
                />
              </div>
              {/* Right Grid of 4 Images */}
              <div className="col-md-6 col-12 px-0">
                <div className="row mx-0">
                  {/* upper */}
                  {data.childrenImage.map((item, i) => {
                    return (
                      <div className="col-6 p-2" key={i}>
                        <Image
                          src={item}
                          alt={`Venue ${index}`}
                          className="img-fluid w-100 h-100 venue-details-sub-image"
                        />
                      </div>
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
export default VenuDetailsImageSection;
