import Link from "next/link";

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

      <div className="group w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://placehold.jp/800080/ffffff/150x300.png"
        />
        <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition-opacity"></div>
        <div className="flex h-full items-center justify-center relative">
          <h1 className="text-3xl text-teal-100 text-opacity-0 group-hover:text-opacity-100 transition-opacity tracking-wider">
            {" "}
            Your adventure starts here
          </h1>
        </div>
      </div>

      {/* Example 2 */}
      <div className="group relative w-96">
        <img
          className="w-full object-cover"
          src="https://plchldr.co/i/520x190?bg=3D8EB9"
        />
        <div className="absolute top-0 left-0 w-full h-0  bg-black opacity-0 group-hover:h-full group-hover:opacity-75 duration-300">
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-white text-lg font-bold"> Continue Shopping</p>
          </div>
        </div>
      </div>

      {/* Example 1 */}
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
            {/* <div className="group w-full max-w-lg h-64 rounded-lg shadow-2xl overflow-hidden relative">
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src="https://placehold.jp/800080/ffffff/150x300.png"
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75 transition-opacity"></div>
              <div className="flex h-full items-center justify-center relative">
                <h1 className="text-3xl text-teal-100 text-opacity-0 group-hover:text-opacity-100 transition-opacity tracking-wider">
                  {" "}
                  Your adventure starts here
                </h1>
              </div>
            </div> */}

            <div className="container mx-auto outline-double sm:columns-2 md:columns-3 lg:columns-4">
              {type.projects.map((project) => (
                <div className="mb-6" key={project.id}>
                  <Link href={`/projects/${project.id}`}>
                    <div className="group relative outline-double">
                      {/* <div className="group max-w-lg h-64 relative"> */}
                      <img
                        src={project.images[0].url}
                        alt="Your Image"
                        className="w-full"
                      />
                      <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75">
                        <div className="flex items-center justify-center relative h-full">
                          <p className="text-white text-lg font-bold text-opacity-0 group-hover:text-opacity-100 tracking-wider">
                            {project.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
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
              ))}
            </div>
          </>
        ))}
      </div>
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
