import PropTypes from 'prop-types';

const TitleAndDescription = ({ title = '', description = '' }) => {
  return (
    <div className="text-center mt-[8.13rem]">
      <h2 className="text-5xl font-extrabold">{title}</h2>
      <p className="mt-4 mb-8">{description}</p>
    </div>
  );
};

TitleAndDescription.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};
export default TitleAndDescription;
