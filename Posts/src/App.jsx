import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function App() 
{
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try 
      {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        );

        const data = await response.json();
        setPostsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {postsData.map((item) => (
        <div key={item.id}>
          <Link to={`/postDetails/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}
