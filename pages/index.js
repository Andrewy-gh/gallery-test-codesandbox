import Link from 'next/link';

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

      <div className="group relative w-96">
        <img
          className="w-full object-cover"
          src="https://plchldr.co/i/520x190?bg=3D8EB9"
        />
        {/* <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
          <div
            className="flex items-center justify-center 
                    h-full
                    "
          >
            <p className="text-white text-lg font-bold">{project.name}</p>
          </div>
        </div> */}
        {/* TESTING  */}
        <div className="absolute top-0 left-0 w-full h-0  bg-black opacity-0 group-hover:h-full group-hover:opacity-75 duration-300">
          <div
            className="flex flex-col items-center justify-center 
                    h-full
                    "
          >
            <p className="text-white text-lg font-bold"> Continue Shopping</p>
          </div>
        </div>
      </div>

      <div className="group relative w-96">
        <img
          className="w-full object-cover"
          src="https://plchldr.co/i/245x155?bg=EB6361"
        />
        <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-indigo-700 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          Continue Shopping
        </div>
      </div>

      <div>
        {result.map((type) => (
          <>
            <div>{type.name}</div>

            {type.projects.map(
              (project) => (
                <Link href={`/projects/${project.id}`}>
                  {/* <div className="group relative w-96">
                    <img
                      className="w-full object-cover"
                      src="https://plchldr.co/i/520x190?bg=3D8EB9"
                    />
                    <div className="absolute top-0 left-0 w-full h-0  bg-black opacity-0 group-hover:h-full group-hover:opacity-75 transition-opacity duration-300">
                      <div
                        className="flex flex-col items-center justify-center 
                          h-full
                          "
                      >
                        <p className="text-white text-lg font-bold">
                          {' '}
                          Continue Shopping
                        </p>
                      </div>
                    </div>
                  </div> */}
                  <div className="group relative w-96">
                    <img
                      src={project.images[0].url}
                      alt="Your Image"
                      className="w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-0 bg-black opacity-0 group-hover:h-full group-hover:opacity-75 transition-opacity duration-300">
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
                </Link>
                // <Link href={`/projects/${project.id}`}>
                //   <div className="relative h-64 w-64">
                //     <img
                //       src={project.images[0].url}
                //       alt="Your Image"
                //       className="w-full h-auto"
                //     />
                //     <div className="absolute inset-0 bg-black opacity-0 hover:opacity-75 transition-opacity duration-300">
                //       <div
                //         className="flex items-center justify-center
                //     h-full
                //     "
                //       >
                //         <p className="text-white text-lg font-bold">
                //           {project.name}
                //         </p>
                //       </div>
                //     </div>
                //   </div>
                // </Link>
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
  const res = await fetch('http://localhost:3001/data'); // Replace with your JSON server endpoint
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
