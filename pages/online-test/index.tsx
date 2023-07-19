import type { NextPage } from "next";
import React, { useState } from "react";
import { Combobox, Listbox, Menu, Transition } from "@headlessui/react";
import { classes } from "../../utils/classes";

const people = [
  "Durward Reynolds",
  "Kenton Towne",
  "Therese Wunsch",
  "Benedict Kessler",
  "Katelyn Rohan",
];

const Playground: NextPage = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div
      className={classes("w-[500px] aspect-video", "bg-gray-700 text-black")}
    >
      <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input
          onChange={(evt) => {
            setQuery(evt.target.value);
          }}
        />
        <Combobox.Button>click</Combobox.Button>
        <Combobox.Options>
          {filteredPeople.map((person) => (
            <Combobox.Option key={person} value={person}>
              {person}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default Playground;
