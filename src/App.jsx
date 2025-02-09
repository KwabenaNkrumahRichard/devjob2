import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/home";
import JobDescription from "./components/jobDetails/jobDescription/jobDescription";
import Header from "./components/header/header";
import { useContext } from "react";
import JobContext from "./context/jobContext";

import classes from "./App.module.css";
import JobDetails from "./pages/jobDetails/jobDetails";

function App() {
  const { lightTheme } = useContext(JobContext);

  return (
    <div className={lightTheme ? classes.light : classes.dark}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/job/:id" element={<JobDetails />} />
      </Routes>
    </div>
  );
}

export default App;
