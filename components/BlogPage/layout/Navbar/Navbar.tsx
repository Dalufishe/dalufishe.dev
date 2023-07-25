import React, { useState, type FC } from "react";
import { Listbox, Menu, RadioGroup, Tab, Transition } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";
import { change_language_action } from "../../../../redux/action/change_language.act";
import { classes } from "../../../../utils/classes";
import Link from "next/link";

const menu = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const Navbar: FC = (props) => {
  const [currentMenuItem, setCurrentMenuItem] = useState(menu[0]);

  const dispatch = useDispatch();

  const languages = useSelector(
    (state: any) => state.language_reducer.languages
  );
  const language = useSelector((state: any) => state.language_reducer.language);

  return (
    <nav
      className={classes(
        "bg-secondary",
        "w-full h-[56px]",
        "flex items-center justify-between",
        "pl-6 pr-3"
      )}
    >
      {/* Dalufishe */}
      <div>
        <h1 className={classes("text-2xl font-bold", "cursor-pointer")}>
          Dalufishe <span className="text-lesslight">Blog</span>
        </h1>
      </div>
      {/* Menu */}
      <RadioGroup
        className={classes("text-md", "flex items-center", "w-fit h-full")}
        value={currentMenuItem}
        onChange={setCurrentMenuItem}
      >
        {/* home, blog & contact */}
        {menu.map((menuitem) => {
          return (
            <RadioGroup.Option
              as={Link}
              href={menuitem.href}
              className={classes(
                //
                "cursor-pointer",
                "hover:bg-primary",
                "w-full h-full",
                "px-6",
                "items-center",
                "hidden sm:flex"
              )}
              key={menuitem.name}
              value={menuitem}
            >
              <span>{menuitem.name}</span>
            </RadioGroup.Option>
          );
        })}
        {/* language */}
        <RadioGroup.Option as={React.Fragment} value="language">
          <Listbox
            as="ul"
            className={classes(
              "relative",
              "cursor-pointer",
              "underline",
              "hover:bg-primary",
              "h-full",
              "flex items-center"
            )}
            value={language}
            onChange={(value) => dispatch(change_language_action(value))}
          >
            <Listbox.Button className={classes("w-[75px] h-full")}>
              {language}
            </Listbox.Button>
            <Transition
              as={React.Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Listbox.Options
                as="div"
                className={classes("absolute", "top-[56px] right-0")}
              >
                {languages.map((lan: any) => (
                  <Listbox.Option
                    value={lan}
                    key={lan}
                    className={classes("ui-active:bg-secondary", "py-3 px-6")}
                  >
                    <span>{lan}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </Listbox>
        </RadioGroup.Option>
      </RadioGroup>
    </nav>
  );
};

export default Navbar;
