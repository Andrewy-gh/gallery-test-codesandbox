export async function getAllPostIds() {
  const res = await fetch('http://localhost:3001/images');
  const posts = await res.json();
  return posts.map((post) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });
}

export async function getPostData(id) {
  const res = await fetch(`http://localhost:3001/images/${id}`);
  const post = await res.json();
  return {
    id,
    url: post.url,
  };
}
