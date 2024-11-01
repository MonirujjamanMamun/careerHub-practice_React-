import Button from '../common/Button';
import UserImg from '../../assets/images/user.png';

const HeaderBaner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={UserImg}
          className="max-w-[50.94rem] max-h-[46.56rem] rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">
            One Step <br /> Closer To Your <br />{' '}
            <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
              Dream Job
            </span>
          </h1>
          <p className="py-6">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <Button title={'Get Start'} />
        </div>
      </div>
    </div>
  );
};

export default HeaderBaner;
