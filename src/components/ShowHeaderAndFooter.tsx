'use client';

import { usePathname } from 'next/navigation';
import Header from '@/module/Header';
import Footer from '@/module/Footer';
import { ToastContainer } from 'react-toastify';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()??"";

  const hideLayoutForHeader = ["/login", "/signup", "/verify"];
  const hideLayoutForFooter = ["/login", "/signup", "/verify","/menue"]
  const shouldShowFooter = !hideLayoutForFooter.includes(pathname);
  const shouldShowHeader = !hideLayoutForHeader.includes(pathname);


  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
      {shouldShowFooter && <Footer />}
      <ToastContainer />
    </>
  );
}
