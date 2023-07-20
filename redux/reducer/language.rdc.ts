const language_reducer = (
  prevState: any = {
    languages: ["EN", "TW", "CN"],
    language: "EN",
  },
  action: any
) => {
  const newState = { ...prevState };
  switch (action.type) {
    case "change-language":
      newState.language = action.payload;
      return newState;
    default:
      return newState;
  }
};

export { language_reducer };
