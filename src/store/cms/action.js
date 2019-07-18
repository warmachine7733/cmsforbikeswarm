import axios from "axios";
export const handleChange = payload => {
  let { type } = payload;
  return async dispatch => {
    dispatch({ type: "HANDLE_TEXT_FIELD", payload });
    // switch (type) {
    //   case "text":

    //   case "file":
    //     dispatch({ type: "HANDLE_FILE", payload });
    // }
  };
};
export const handleFileChange = file => {
  return dispatch => {
    dispatch({ type: "STORE_FILE", file });
  };
};

export const addBike = file => {
  return async (dispatch, getState) => {
    let bikeObj = getState().cms;
    const data = new FormData();
    Object.keys(bikeObj).map(each => data.append(each, bikeObj[each]));
    // console.log("state", Object.keys(getState().cms));
    // data.append("name", getState().cms.name);
    // data.append("releaseDate", "Wed Jul 17 2019");
    // data.append("engine", getState().cms.engine);
    // data.append("power", 13);
    // data.append("torque", 12);
    // data.append("brakes", "dual drum");
    // data.append("tyreType", "tubeless");
    // data.append("abs", true);
    // data.append("millage", 40);
    // data.append("passSwitch", true);
    // data.append("console", "Hybrid");
    // data.append("antiTheft", true);
    // data.append("stepUpSeat", true);
    // data.append("maxSpeed", 145);
    // data.append("zeroToSixty", 3.4);
    // data.append("frontSuspension", "lala");
    // data.append("rearSuspension", "lala");
    // data.append("lowFuelIndicator", true);
    // data.append("maintenanceIndicator", true);
    // data.append("lowBatteryIndicator", true);
    // console.log("data", data);

    const result = await axios.post("http://localhost:9000/bike/addbike", data);
  };
};
