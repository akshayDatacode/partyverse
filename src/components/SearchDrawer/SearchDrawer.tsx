import Drawer from "@/ui/Drawer";
import SelectPartyFilter from "@/module/SearchPartyFilter";

type Props = {
  open: boolean;
  onClose: () => void;
};

const SearchDrawer = ({ open, onClose }: Props) => {
  return (
    <>
      <Drawer
       open={open} 
       onClose={onClose} 
      //  title="Search Party places" 
       width="100%">
         <h1 className="fw-bold text-center mb-4">Search Party places</h1>
        <SelectPartyFilter />
      </Drawer>
    </>
  );
};

export default SearchDrawer;