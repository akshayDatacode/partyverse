import VenuListFilter from "@/pages/VenueListingPage/components/VenuListFilter";
import Drawer from "@/ui/Drawer";

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
      </Drawer>
    </>
  );
};

export default FilterDrawer;
