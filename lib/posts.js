export async function getAllPostIds() {
  const res = await fetch("http://localhost:3001/images");
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

export async function getAllProjectIds() {
  const res = await fetch("http://localhost:3001/data");
  const { projects } = await res.json();
  console.log("projects", projects);
  return projects.map((project) => {
    return {
      params: {
        id: project.id.toString(),
      },
    };
  });
}

export async function getProjectData(id) {
  const res = await fetch("http://localhost:3001/data");
  const data = await res.json();
  const project = data.projects.find((project) => project.id === parseInt(id));

  console.log("project", project);
  return {
    ...project,
    images: data.images.filter((image) => project.imageIds.includes(image.id)),
  };
}
