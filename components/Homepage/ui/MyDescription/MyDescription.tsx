import React, { FC } from "react";

type Props = {
  children: any;
};

const MyDescription: FC<Props> = (props: Props) => {
  return <p className="text-lesslight">{props.children}</p>;
};

export default MyDescription;
