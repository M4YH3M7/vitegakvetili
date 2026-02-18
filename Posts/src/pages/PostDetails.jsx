import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function PostDetails() {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        const data = await response.json();
        setPostData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPost();
  }, [id]);

  if (!postData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h1>{postData.title}</h1>
      <p>{postData.body}</p>
    </div>
  );
}
