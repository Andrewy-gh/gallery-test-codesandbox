import { useEffect, useState } from "react";

export default function ImageGalleryPage({ data }) {
  if (!data) {
    return <div>Loading...</div>;
  }

  const result = data.types.map((type) => ({
    id: type.id,
    name: type.name,
    projects: type.projectIds.map((projectId) => {
      const project = data.projects.find((p) => p.id === projectId);
      const imageIds = project.imageIds.map((imageId) => {
        const image = data.images.find((img) => img.id === imageId);
        return {
          id: image.id,
          url: image.url,
        };
      });

      return {
        id: project.id,
        name: project.name,
        images: imageIds,
      };
    }),
  }));

  // [
  //   { id: 1, name: 'Portfolio', projects: [ [Object], [Object] ] },
  //   { id: 2, name: 'Editorial', projects: [ [Object] ] }
  // ]
  // {
  //   id: 1,
  //   name: 'Project 1',
  //   images: [
  //     {
  //       id: 1,
  //       url: 'https://placehold.jp/80ff00/000000/150x150.png?text=project%201-%20type%201'
  //     },
  //     {
  //       id: 2,
  //       url: 'https://placehold.jp/80ff00/000000/150x150.png?text=project%201-%20type%201'
  //     },
  //     {
  //       id: 3,
  //       url: 'https://placehold.jp/80ff00/000000/150x150.png?text=project%201-%20type%201'
  //     }
  //   ]
  // }

  return (
    <div>
      <h1>Image Gallery</h1>
      <div className="h-64 w-64">
        <div className="relative">
          <img
            src="https://placehold.jp/8000ff/000000/300x300.png?text=Hover%20over%20me!"
            alt="Your Image"
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
            <div className="flex items-center justify-center h-full">
              <p className="text-white text-lg font-bold">Your Text</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {result.map((type) => (
          <>
            <div>{type.name}</div>
            {type.projects.map(
              (project) => (
                <div className="relative h-64 w-64">
                  <img
                    src={project.images[0].url}
                    alt="Your Image"
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
                    <div
                      className="flex items-center justify-center 
                    h-full
                    "
                    >
                      <p className="text-white text-lg font-bold">
                        {project.name}
                      </p>
                    </div>
                  </div>
                </div>
              )
              // project.images.map((image) => (
              //   <div>
              //     <img src={image.url} />
              //   </div>
              // ))
            )}
          </>
        ))}
      </div>
      {/* <ul>
        {result.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.id} />
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3001/data"); // Replace with your JSON server endpoint
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
    revalidate: 60, // Number of seconds to re-generate the page (optional)
  };
}

// function Gallery({ images }) {
//   return (
//     <>
//       <div>Hello World</div>
//       <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
//         <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {images.map((image) => (
//             <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3001/images'); // Replace with your JSON server endpoint
//   const data = await res.json();

//   return {
//     props: {
//       images: data,
//     },
//     revalidate: 60, // Number of seconds to re-generate the page (optional)
//   };
// }

// export default Gallery;
