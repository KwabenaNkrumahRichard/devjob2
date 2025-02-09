import DescriptionHeader from "../descriptionHeader/descriptionHeader";
import Doings from "../doings/doings";
import Footer from "../footer/footer";
import JobBanner from "../jobBanner/jobBanner";
import Requirement from "../requirement/requirement";
import classes from "./jobDescription.module.css";
import { useContext } from "react";
import JobContext from "../../../context/jobContext";

function JobDescription(props) {
  const { lightTheme } = useContext(JobContext);
  return (
    <div className={lightTheme ? classes.light : classes.dark}>
      <JobBanner
        logoBackground={props.logoBackground}
        company={props.company}
        website={props.website}
        apply={props.apply}
        logo={props.logo}
      />
      <div className={classes.container}>
        <DescriptionHeader
          contract={props.contract}
          position={props.position}
          location={props.location}
          description={props.description}
          postedDate={props.postedDate}
        />
        <Requirement requirement={props.requirement} />
        <Doings role={props.role} />
      </div>
      <Footer position={props.position} company={props.company} />
    </div>
  );
}

export default JobDescription;
