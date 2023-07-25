import { ReactElement } from "react";
import Navbar from "./Navbar/Navbar";

type Props = { children: ReactElement | ReactElement[] };

export default function BlogLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
