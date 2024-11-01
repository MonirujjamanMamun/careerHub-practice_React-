import PropTypes from 'prop-types';

const CategoryCard = ({ category }) => {
  console.log(category);
  const { logo, category_name, availability } = category;
  return (
    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0 overflow-hidden">
        {logo && (
          <img
            className="w-full h-full object-cover"
            src={logo}
            alt={category_name}
          />
        )}
      </div>
      <div className="flex-grow">
        <h2 className="text-xl font-extrabold mb-3">{category_name}</h2>
        <p className="leading-relaxed text-base">{availability}</p>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  category: PropTypes.object,
};
export default CategoryCard;
