import { Link } from "react-router-dom";

import JobCard from "../jobCard/jobCard";

import classes from "./jobCardList.module.css";
import Button from "../button/button";

function JobCardList(props) {
  let jobCardItems = props.data.map((item) => (
    <li key={item.id} className={classes.item}>
      <Link to={`/job/${item.id}`}>
        <JobCard
          logo={item.logo}
          position={item.position}
          postedDate={item.postedAt}
          contract={item.contract}
          company={item.company}
          country={item.location}
          logobackground={item.logoBackground}
        />
      </Link>
    </li>
  ));

  return (
    <>
      <ul className={classes.container}>{jobCardItems}</ul>
      <div className={classes.buttonCon}>
        <Button>Load More</Button>
      </div>
    </>
  );
}

export default JobCardList;
