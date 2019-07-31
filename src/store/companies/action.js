import axios from "axios";
export const getCompanies = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(
        "http://localhost:9000/company/getcompanies"
      );
      console.log("data", data);
      dispatch({ type: "STORE_COMPANIES", data });
    } catch (e) {
      console.log(e);
    }
  };
};
