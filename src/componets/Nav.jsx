import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../utils/api";

const Nav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <nav className="Nav">
      <Link to={`/categories`}>all Categories </Link>
      {categories.map((category) => {
        return (
          <Link key={category.slug} to={`/categories/${category.slug}`}>
            {category.slug}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
