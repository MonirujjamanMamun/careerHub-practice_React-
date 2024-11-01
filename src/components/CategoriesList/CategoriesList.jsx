import { useEffect, useState } from 'react';
import TitleAndDescription from '../common/TitleAndDescription';
import CategoryCard from './CategoryCard';

const CategoriesList = () => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    fetch('categories.json')
      .then((res) => res.json())
      .then((data) => setCategoryList(data));
  }, []);

  const title = 'Job Category List';
  const description =
    'Explore thousands of job opportunities with all the information you need. Its your future';
  return (
    <div>
      <div>
        <TitleAndDescription title={title} description={description} />
      </div>
      <section className="body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex lg:flex-nowrap md:flex-nowrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            {categoryList.map((cate) => (
              <CategoryCard key={cate.id} category={cate} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoriesList;
