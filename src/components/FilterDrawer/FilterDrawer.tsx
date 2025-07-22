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
        title="Filter Venues"
        width="100%"
      >
        <VenuListFilter
          showFilters={showFilters}
          setShowFilters={setShowFilters}
        />
      </Drawer>
    </>
  );
};

export default FilterDrawer;
