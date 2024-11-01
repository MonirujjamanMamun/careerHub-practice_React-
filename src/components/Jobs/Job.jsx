import PropTypes from 'prop-types';
import { CiLocationOn } from 'react-icons/ci';
import { CiDollar } from 'react-icons/ci';
import Button from '../common/Button';

const Job = ({ job }) => {
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
    <div className="p-12 flex flex-col min-h-96 border-gray-300 border overflow-hidden rounded-2xl">
      {logo && (
        <img
          className="lg:h-48 md:h-36 w-full object-cover object-center rounded"
          src={logo}
          alt={company_name}
        />
      )}
      <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">
        {job_title}
      </h2>
      <p className="leading-relaxed mb-8">{company_name}</p>
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
      <div className="mt-9">
        <Button title={'View Details'} path={`job/${id}`} />
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};
export default Job;
