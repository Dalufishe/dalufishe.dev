import { ReactElement } from "react";

import Block from "../ui/Block/Block";
import Navbar from "./Navbar/Navbar";

type Props = { children: ReactElement | ReactElement[]};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Block value={20} />
      {children}
    </>
  );
}
