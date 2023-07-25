import { ReactElement } from "react";

import Block from "../ui/Block/Block";
import Navbar from "./Navbar/Navbar";

type Props = { children: ReactElement | ReactElement[]};

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
