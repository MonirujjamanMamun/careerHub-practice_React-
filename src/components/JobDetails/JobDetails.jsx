import { CiDollar } from 'react-icons/ci';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { IoCalendarOutline } from 'react-icons/io5';
import { FiPhone } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import { setDataLocalStorage } from '../../utils/localStorageData';
import HeaderBaner from '../common/HeaderBaner';
// import Button from '../common/Button';
// import { setDataLocalStorage } from '../../utils/localStorageData';

const JobDetails = () => {
  const jobsData = useLoaderData();
  const { id: userId } = useParams();
  const findData = jobsData.find((job) => job.id === parseInt(userId));
  const {
    id,
    job_title,
    salary,
    job_description,
    contact_information,
    experiences,
    educational_requirements,
    job_responsibility,
  } = findData;
  const { phone, email, address } = contact_information;

  const handelApply = (id) => {
    setDataLocalStorage(id);
  };
  return (
    <div>
      <div>
        <HeaderBaner title="Job Details" />
      </div>
      <div className="container mx-auto mt-32">
        <div className="grid md:grid-cols-4 gap-5">
          <div className="col-span-3 p-3">
            <h3 className="">
              <span className="font-bold">Job Description : </span>
              {job_description}
            </h3>
            <p className="mt-7">
              <span className="text-bold">Job Responsibility:</span>
              {job_responsibility}
            </p>
            <p className="mt-7">
              <span className="text-bold">Educational Requirement : </span>
              {educational_requirements}
            </p>
            <p className="mt-7">
              <span className="text-bold">Experiences : </span>
              {experiences}
            </p>
          </div>
          {/* side bar */}
          <div className="bg-[#7E90FE1A] rounded-lg p-4">
            <h2 className="text-xl border-b border-[#7E90FE] p-6">
              Job Details
            </h2>
            <div className="flex gap-2 mt-6 items-center">
              <CiDollar className="text-xl" />
              <p>
                <span className="font-bold text-xl">Salary : </span> {salary}{' '}
                (Per Month)
              </p>
            </div>
            <div className="flex gap-2 mt-6 items-center">
              <IoCalendarOutline className="text-4" />
              <p>Job Title : {job_title}</p>
            </div>
            <h2 className="text-xl border-b border-[#7E90FE] p-6">
              Contact Information
            </h2>
            <div className="flex gap-2 mt-3 items-center">
              <FiPhone className="text-4" />
              <p>Phone : {phone}</p>
            </div>
            <div className="flex gap-2 mt-3 items-center">
              <MdOutlineEmail className="text-4" />
              <p>E-mail : {email}</p>
            </div>
            <div className="flex gap-2 mt-3 mb-7 items-center">
              <CiLocationOn className="text-xl" />
              <p>Address : {address}</p>
            </div>
            <div className="w-full">
              <Link>
                <button
                  onClick={() => handelApply(id)}
                  className="flex-nowrap btn px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] 
                   text-white font-extrabold"
                >
                  Apply Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
