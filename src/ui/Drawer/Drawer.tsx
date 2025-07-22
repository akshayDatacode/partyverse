import { ReactNode } from "react";
import { Drawer as AntDrawer } from "antd";

type DrawerProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  placement?: "top" | "right" | "bottom" | "left";
  title?: string;
  width?: number | string;
  height?:string | number;
  extra?: ReactNode;
};

const Drawer = ({
  children,
  open,
  onClose,
  placement = "bottom",
  title,
  width = 400,
  height=500,
  extra,
}: DrawerProps) => {
  return (
    <>
      <AntDrawer
        title={title}
        placement={placement}
        onClose={onClose}
        open={open}
        width={width}
        height={height}
        extra={extra}
      >
        {children}
      </AntDrawer>
    </>
  );
};

export default Drawer;