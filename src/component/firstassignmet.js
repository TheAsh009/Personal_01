import React from "react";

import { useState, useEffect } from "react";

export default function FirstAssign() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((res) => setPost(res));
  }, []);

  console.log(post);

  const handelDelete = (Id) => {
    const newData = post.filter((ele) => ele.id != Id);
    setPost(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>UserId</th>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {post.map((post, index) => {
            return (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
                <span onClick={() => handelDelete(post.id)}>❌</span>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
