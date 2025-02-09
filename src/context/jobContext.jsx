import React from "react";

const JobContext = React.createContext({
  lightTheme: Boolean,
  changetheme: () => {},
  data: [{}],
});

export default JobContext;
