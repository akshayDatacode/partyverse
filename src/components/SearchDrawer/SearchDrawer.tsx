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
       title="Search Party places" 
       width="100%">
        <SelectPartyFilter />
      </Drawer>
    </>
  );
};

export default SearchDrawer;