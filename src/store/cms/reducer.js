const initialState = { file: "" };
export const cms = (state = initialState, action) => {
  switch (action.type) {
    case "HANDLE_TEXT_FIELD":
      return { ...state, [action.payload.id]: action.payload.value };
    case "HANDLE_FILE":
      return { ...state, [action.payload.id]: action.payload.value };
    case "STORE_FILE":
      return {
        ...state,
        file: action.file
      };
    default:
      return state;
  }
};
