import PropTypes from 'prop-types';

const HeaderBaner = ({ title = '' }) => {
  return (
    <div className="w-full h-96 text-center bg-[#7E90FE0D] p-11">
      <h1 className="text-4xl mt-9">{title}</h1>
    </div>
  );
};

HeaderBaner.propTypes = {
  title: PropTypes.string,
};
export default HeaderBaner;
