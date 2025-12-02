import { useLoaderData } from "react-router-dom";
import NewsCarad from "./NewsCarad";

const CategorieNews = () => {
  const { data:News } = useLoaderData()
  console.log('Hello', News);
  
  return (
    <div className="px-6 py-6">
      <h2 className="">{News.length} News found on This category </h2>
      <div>
        {News.map(sengilNews => (
          <NewsCarad key={sengilNews._id} News={sengilNews}>
            
          </NewsCarad>
        ))}
      </div>
    </div>
  );
};

export default CategorieNews;