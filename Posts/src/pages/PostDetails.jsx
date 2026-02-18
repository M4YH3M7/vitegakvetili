import { useParams } from "react-router";
import { useEffect, useState } from "react";

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => 
    {
    const gottenData = async () => {
      try {
        const responseURL = await fetch
        (
          "https://jsonplaceholder.typicode.com/posts?_limit=15"
        );

        const data = await responseURL.json();

        const foundPost = data.find((item) => item.id === Number(id));

        if (!foundPost) {
          setPost("notfound");
        } else {
          setPost(foundPost);
        }
      } catch (error) {
        console.log(error);
      }
    };

    gottenData();
  }, [id]);

  if (post === null) {
    return <div>Loading....</div>;
  }

  if (post === "notfound") {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
