import { useReducer } from "react";

import JobContext from "./jobContext";
import data from "./../assets/data.json";

const defaultvalue = {
  lightTheme: true,
  data,
};
const reducer = (state, action) => {
  switch (action.TYPE) {
    case "CHANGETHEME":
      return {
        ...state,
        lightTheme: !state.lightTheme,
      };
  }
};

function JobContextProvider(props) {
  const [state, dispath] = useReducer(reducer, defaultvalue);

  function changetheme() {
    dispath({ TYPE: "CHANGETHEME" });
  }

  const cxtValue = {
    changetheme,
    lightTheme: state.lightTheme,
    data: state.data,
  };
  return (
    <JobContext.Provider value={cxtValue}>{props.children}</JobContext.Provider>
  );
}

export default JobContextProvider;
