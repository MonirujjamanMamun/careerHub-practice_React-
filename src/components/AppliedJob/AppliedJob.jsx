import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getDataLocalStorage } from '../../utils/localStorageData';
import AppliedJobDetails from '../AppliedJobDetails/AppliedJobDetails';
import HeaderBaner from '../common/HeaderBaner';

const AppliedJob = () => {
  const [jobApply, setJobApply] = useState([]);
  const [filterJob, setFilterJob] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Filter By');
  // array of options
  const options = ['All', 'Remote', 'OnSite'];
  const jobs = useLoaderData();

  useEffect(() => {
    const localId = getDataLocalStorage();
    if (jobs.length > 0) {
      const applyJob = jobs.filter((job) => localId.includes(job.id));
      setJobApply(applyJob);
      setFilterJob(applyJob);
    }
  }, [jobs]);

  useEffect(() => {
    // Run filter logic when selectedValue changes
    if (selectedValue === 'All') {
      setFilterJob(jobApply);
    } else if (selectedValue === 'Remote') {
      const remoteJob = jobApply.filter(
        (job) => job.remote_or_onsite === 'Remote'
      );
      setFilterJob(remoteJob);
    } else if (selectedValue === 'OnSite') {
      const onSiteJob = jobApply.filter(
        (job) => job.remote_or_onsite === 'Onsite'
      );
      setFilterJob(onSiteJob);
    }
  }, [selectedValue, jobApply]);

  return (
    <div>
      <div>
        <HeaderBaner title="Applied Jobs" />
      </div>
      <div className="flex justify-between mt-3">
        <div></div>
        <div>
          {/* dropdown - btn */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between rounded-xl px-6 py-2"
          >
            <h1 className="font-medium text-white">{selectedValue}</h1>
            <svg
              className={`${isOpen ? '-rotate-180' : 'rotate-0'} duration-300`}
              width={25}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M7 10L12 15L17 10"
                  stroke="#4B5563"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </div>
          {/* dropdown - options  */}
          <div
            className={`${
              isOpen
                ? 'visible top-0 opacity-100'
                : 'invisible -top-4 opacity-0'
            } relative mx-auto my-4 w-72 rounded-xl py-4 border duration-300`}
          >
            {options?.map((option, idx) => (
              <div
                key={idx}
                onClick={(e) => {
                  setSelectedValue(e.target.textContent);
                  setIsOpen(false);
                }}
                className="px-6 py-2 text-white"
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto p-20 mb-5 -mt-28">
        {filterJob.map((app) => (
          <AppliedJobDetails key={app.id} job={app} />
        ))}
      </div>
    </div>
  );
};

export default AppliedJob;
