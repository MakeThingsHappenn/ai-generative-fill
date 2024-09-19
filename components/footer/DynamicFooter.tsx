"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const DynamicFooter = ({ lang }: { lang: string }) => {
  const pathname = usePathname();

  if (pathname.includes("playground")) {
    return null;
  }

  return <Footer lang={lang} />;
};

export default DynamicFooter;

