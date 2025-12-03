import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCarad";

const CategorieNews = () => {
  const loaderData = useLoaderData();
  const News = loaderData?.data || [];

  return (
    <div className="px-6 py-6">
      <h2>{News.length} News found on This category</h2>

      <div>
        {News.map(sengilNews => (
          <NewsCard 
             key={sengilNews._id} 
             news={sengilNews} 
          />
        ))}
      </div>
    </div>
  );
};

export default CategorieNews;
