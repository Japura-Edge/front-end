import "../assets/categories.css";

const Categories = ({ categoryList }: any) => {
  return (
    <div className="category-list row">
      {categoryList.map((category: any) => (
        <button className="category-item">{category.categoryGroup}</button>
      ))}
    </div>
  );
};

export default Categories;
