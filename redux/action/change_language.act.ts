
type language = "EN" | "ZH_TW";

const change_language_action = (payload: language) => {
  return {
    type: "change-language",
    payload,
  };
};

export { change_language_action };
