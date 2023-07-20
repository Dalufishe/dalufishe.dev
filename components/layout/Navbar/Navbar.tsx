import React, { useState, type FC } from "react";
import { classes } from "../../../utils/classes";
import { Listbox, Menu, RadioGroup, Tab } from "@headlessui/react";
import { MdLanguage } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { change_language_action } from "../../../redux/action/change_language.act";

const menu = [{ name: "Home" }, { name: "Blog" }, { name: "Contact" }];

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
        "px-3"
      )}
    >
      {/* Dalufishe */}
      <h1 className={classes("text-2xl font-bold", "cursor-pointer")}>
        Dalufishe
      </h1>
      {/* Menu */}
      <RadioGroup
        className={classes(
          "text-md font-bold",
          "flex items-center",
          "w-fit h-full"
        )}
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
          </Listbox>
        </RadioGroup.Option>
      </RadioGroup>
    </nav>
  );
};

export default Navbar;
