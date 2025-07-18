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
      <section className="row mx-0 my-2">
        {imageData && imageData.map((data, index) => {
          return (
            <>
              <div className="col-md-6 col-12 py-md-2 py-1" key={index}>
                <Image
                  src={data.parentImage}
                  alt="Venue 1"
                  className="img-fluid w-100 h-100 venue-details-main-image"
                />
              </div>
              <div className="col-md-6 col-12 px-0">
                <div className="row mx-0">
                  {data?.childrenImage.map((item, i) => {
                    return (
                      <div className="col-6 p-md-2 mb-md-0 mb-3" key={i}>
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
      </section>
    </>
  );
};
export default VenuDetailsImageSection;
