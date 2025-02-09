import { useParams } from "react-router-dom";
import JobDescription from "../../components/jobDetails/jobDescription/jobDescription";
import { useContext } from "react";
import JobContext from "../../context/jobContext";

function JobDetails() {
  const { data } = useContext(JobContext);
  const { id } = useParams();

  const job = data.find((item) => item.id === +id);

  return (
    <>
      <JobDescription
        contract={job.contract}
        position={job.position}
        location={job.location}
        description={job.description}
        postedDate={job.postedAt}
        requirement={job.requirements}
        role={job.role}
        company={job.company}
        logoBackground={job.logoBackground}
        website={job.website}
        apply={job.apply}
        logo={job.logo}
      />
    </>
  );
}

export default JobDetails;
