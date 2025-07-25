import VenuListFilter from "@/pages/VenueListingPage/components/VenuListFilter";
import Drawer from "@/ui/Drawer";
import Button from "@/ui/Button";

type Props = {
  open: boolean;
  onClose: () => void;
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
};

const FilterDrawer = ({
  open,
  onClose,
  showFilters,
  setShowFilters,
}: Props) => {
  return (
    <>
      <Drawer
        open={open}
        onClose={onClose}
        // title="Filter Venues"
        width="100%"
      >
        <h1 className="fw-bold text-center mb-4">Filters</h1>
        <VenuListFilter
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
          <div className=" col-12  d-md-none d-block mt-4 pt-4">
          <Button label="Search Now" fullWidth borderRadius="rounded-5" padding="py-3"/>
        </div>
      </Drawer>
    </>
  );
};

export default FilterDrawer;
