export const fetchPosts = async () => {
  //fetch posts from "https://jsonplaceholder.typicode.com/posts"
  //return the posts
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch posts");
  }
  return data;
};

export const fetchPostById = async (id) => {
  //fetch a post by id from "https://jsonplaceholder.typicode.com/posts/${id}"
  //return the post
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || "Failed to fetch post");
  }
  return data;
};

export const sequentialPromise = async (promises, order) => {
  //execute promises sequentially
  //return the results in the order specified
  //if there is a rejected promise, throw an error, and stop executing the rest of the promises
  //Example:
  //order = [2,1,3]
  //promises = [
  //   Promise.resolve("data1"),
  //   Promise.resolve("data2"),
  //   Promise.resolve("data3"),
  // ];
  //results = ["data2", "data1", "data3"]
  const results = [];
  for (let i=0; i<promises.length; i++) {
    const result = await promises[order[i]];
    if (result instanceof Error) {
      throw result;
    }
    results.push(result);
  }
  return results;
};
