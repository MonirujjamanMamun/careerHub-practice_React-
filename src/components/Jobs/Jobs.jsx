import { useEffect, useState } from 'react';
import TitleAndDescription from '../common/TitleAndDescription';
import Job from './Job';
import Button from '../common/Button';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [totalJob, setTotalJob] = useState(4);

  useEffect(() => {
    fetch('jobs.json')
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const title = 'Featured Jobs';
  const description =
    'Explore thousands of job opportunities with all the information you need. Its your future';
  return (
    <div>
      <div>
        <TitleAndDescription title={title} description={description} />
      </div>
      <section className="body-font overflow-hidden">
        <div className="container px-2 py-4 mx-auto">
          <div className="grid grid-cols-2 gap-5">
            {jobs.slice(0, totalJob)?.map((job) => (
              <Job key={job.id} job={job} />
            ))}
          </div>
          <div
            className={`mt-10 mb-36 text-center ${
              jobs.length === totalJob ? 'hidden' : null
            }`}
          >
            <Button
              title={'See All Jobs'}
              fun={() => setTotalJob(jobs.length)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Jobs;
