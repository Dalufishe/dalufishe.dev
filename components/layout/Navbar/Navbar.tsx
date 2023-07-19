import { useState, type FC } from "react";
import { classes } from "../../../utils/classes";
import { RadioGroup, Tab } from "@headlessui/react";

const menu = [{ name: "Home" }, { name: "Blog" }, { name: "Contact" }];

const Navbar: FC = () => {
  const [currentMenuItem, setCurrentMenuItem] = useState(menu[0]);

  return (
    <nav
      className={classes(
        "bg-secondary",
        "w-full h-[56px]",
        "flex items-center justify-between",
        "px-3"
      )}
    >
      {/* Dalufishe */}
      <h1 className={classes("text-2xl", "cursor-pointer")}>Dalufishe</h1>
      {/* Menu */}
      <RadioGroup
        className={classes("text-md", "flex items-center", "w-fit h-full")}
        value={currentMenuItem}
        onChange={setCurrentMenuItem}
      >
        {menu.map((menuitem) => {
          return (
            <RadioGroup.Option
              className={classes(
                "cursor-pointer",
                "hover:bg-primary",
                "w-full h-full",
                "px-6",
                "flex items-center"
              )}
              key={menuitem.name}
              value={menuitem}
            >
              <span>{menuitem.name}</span>
            </RadioGroup.Option>
          );
        })}
      </RadioGroup>
    </nav>
  );
};

export default Navbar;
