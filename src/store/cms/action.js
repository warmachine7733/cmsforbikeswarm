import axios from "axios";
export const handleChange = payload => {
  let { type } = payload;
  return async dispatch => {
    console.log(payload);
    dispatch({ type: "HANDLE_CHANGE_FILELDS", payload });
  };
};
export const handleFileChange = file => {
  return dispatch => {
    dispatch({ type: "STORE_FILE", file });
  };
};

export const addBike = file => {
  return async (dispatch, getState) => {
    try {
      let bikeObj = getState().cms;
      console.log("files are", file);
      const data = new FormData();
      Object.keys(bikeObj).map(each =>
        each == "file" ? null : data.append(each, bikeObj[each])
      );
      for (let i = 0; i < file.length; i++) {
        data.append("file", file[i]);
      }
      // console.log("data to be sent", data);
      const result = await axios.post(
        "http://localhost:9000/bike/addbike",
        data
      );
      console.log("result", result);
    } catch (e) {
      console.log("error is", e.message);
    }
  };
};

