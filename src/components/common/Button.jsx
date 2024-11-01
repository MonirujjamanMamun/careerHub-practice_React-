import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ title, path = '/', fun = null }) => {
  // Handler function that checks if 'fun' is provided
  const handleClick = (event) => {
    if (fun) {
      event.preventDefault(); // Prevent navigation if using the handler
      fun();
    }
  };

  return (
    <div>
      <Link
        to={path}
        onClick={handleClick}
        className="flex-nowrap btn px-7 py-5 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] 
                   text-white font-extrabold"
      >
        {title}
      </Link>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired, // Ensure the title is required
  path: PropTypes.string,
  fun: PropTypes.func, // Handler is optional
};

export default Button;
