import { useParams } from 'react-router-dom';
import JobDetails from '../JobDetails/JobDetails';

const Statistics = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Statistics</h1>
      {id && <JobDetails />}
    </div>
  );
};

export default Statistics;
