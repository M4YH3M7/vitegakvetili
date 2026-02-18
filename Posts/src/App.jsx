import { useEffect, useState } from "react";
import { Link } from "react-router";
import "./App.css";

export default function App() {
  const [postsData, setPostsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=20`,
        );
        const data = await response.json();
        setPostsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  });

  return (
    <div>
      {postsData.map((item) => (
        <div>
          <Link to={`/postDetails/${item.id}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
}