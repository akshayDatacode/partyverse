'use client';

import { usePathname } from 'next/navigation';
import Header from '@/module/Header';
import Footer from '@/module/Footer';
import { ToastContainer } from 'react-toastify';

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()??"";

  const hideLayoutFor = ["/login", "/signup", "/verify"];
  const shouldShowFooter = !hideLayoutFor.includes(pathname);
  const shouldShowHeader = !hideLayoutFor.includes(pathname);


  return (
    <>
      {shouldShowHeader && <Header />}
      {children}
      {shouldShowFooter && <Footer />}
      <ToastContainer />
    </>
  );
}
