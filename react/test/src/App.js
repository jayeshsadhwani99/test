import React, { useEffect, useState } from "react";
// import "./../styles/App.css";

const App = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    setPosts([
      {
        id: 0,
        title: "hi",
        description: "hellosdvsd",
        img: "asjf,basj,f",
        likes: 0,
      },
      {
        id: 1,
        title: "hi",
        description: "hellosdvsd",
        img: "asjf,basj,f",
        likes: 0,
      },
      {
        id: 2,
        title: "hi",
        description: "hellosdvsd",
        img: "asjf,basj,f",
        likes: 0,
      },
      {
        id: 3,
        title: "hi",
        description: "hellosdvsd",
        img: "asjf,basj,f",
        likes: 0,
      },
      {
        id: 4,
        title: "hi",
        description: "hellosdvsd",
        img: "asjf,basj,f",
        likes: 0,
      },
    ]);
  };

  const likePost = (index) => {
    const temp = [...posts];

    temp[index].likes++;

    setPosts(temp);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div id="main">
      {posts.map((e, index) => (
        <div>
          <h1>{e.title}</h1>
          <p>{e.description}</p>
          <button onClick={() => likePost(index)}>{e.likes} Like(s)</button>
        </div>
      ))}
    </div>
  );
};

export default App;
