import { useLoaderData } from "react-router-dom";

const CategorieNews = () => {
  const { data } = useLoaderData()
  console.log("Hello",   data);
  
  return (
    <div>
      <h2>{ data.length}Categorie News </h2>
    </div>
  );
};

export default CategorieNews;