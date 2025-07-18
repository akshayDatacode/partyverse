import SelectDropdown from "@/components/SelectDropdown";
import "./style.scss";
import Button from "@/ui/Button";

type SelectProps = {
  actionEvent?: boolean;
};

const SelectPartyFilter = ({ actionEvent = false }: SelectProps) => {
  return (
    <div className="row mx-0 ">
      {[{ lab: "Location Type", placeholder: "Fine Dine" },
        {lab: "Celebration Date", placeholder: "23/03/2025"},
        {lab: "Occasion", placeholder: "Get Together"},
         ].map((item, index) => {
        return (
          <div className={`${actionEvent ? "col-2" : " col-3"} text-center select-party p-3 ${index===0 ? "select-start":""}`} key={index}>
            <SelectDropdown label={item.lab} place_holder={item.placeholder} />
          </div>
        )
      })}
      <div className={`text-center py-3 position-relative select-party ${actionEvent ? "col-2" : "select-end col-3"}`}>
        <SelectDropdown label="Number of Guests" place_holder="100" />
        <div className="position-absolute bg-dark text-white fw-medium px-2 py-1 fs-10 tentative-number lh-100 ls-0 font-style-medium">just a tentative number!</div>
      </div>
      {actionEvent ?
        <div className="col-2 px-0 py-3 text-center d-flex align-items-center justify-content-center select-end select-party">
          <Button label="Edit Search" />
        </div> : ""
      }
    </div>
  );
}

export default SelectPartyFilter;