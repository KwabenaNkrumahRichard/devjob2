import { useContext, useState } from "react";

import FilterForm from "../../components/filterform/filterForm";
import JobCardList from "../../components/jobCardList/jobCardList";
import JobContext from "../../context/jobContext";
import NotFound from "../../components/notFound/notFound";

function HomePage(props) {
  const { lightTheme, data } = useContext(JobContext);
  const [jobData, setJobData] = useState(data);
  return (
    <div className={lightTheme ? "light" : "dark"}>
      <FilterForm setJobData={setJobData} />
      {jobData.length === 0 ? <NotFound /> : <JobCardList data={jobData} />}
    </div>
  );
}

export default HomePage;
