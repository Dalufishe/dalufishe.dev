import React, { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MyDescription: FC<Props> = (props: Props) => {
  return <p className="text-lesslight">{props.children}</p>;
};

export default MyDescription;
