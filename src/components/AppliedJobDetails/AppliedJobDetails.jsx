import { CiDollar, CiLocationOn } from 'react-icons/ci';
import Button from '../common/Button';

const AppliedJobDetails = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-side mb-7 shadow-xl">
      <figure>
        <img src={logo} alt={company_name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="mr-4 py-2 px-5 border border-[#7E90FE] rounded text-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="mr-4 py-2 px-5 border border-[#7E90FE] rounded text-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="flex gap-10 mt-6">
          <div className="flex gap-2 font-semibold text-xl items-center">
            <CiLocationOn className="text-2xl" />
            <p>{location}</p>
          </div>
          <div className="flex gap-2 font-semibold text-xl items-center">
            <CiDollar className="text-2xl" />
            <p>{salary}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Button title={'View Details'} path={`job/${id}`} />
        </div>
      </div>
    </div>
  );
};

export default AppliedJobDetails;
