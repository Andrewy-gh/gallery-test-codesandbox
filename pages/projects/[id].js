import { getAllProjectIds, getProjectData } from '../../lib/projects';

export async function getStaticProps({ params }) {
  const postData = await getProjectData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = await getAllProjectIds();
  console.log(paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  console.log('postData in project', postData);
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {postData.images.map((image) => (
          <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
        ))}
      </div>
    </div>
  );
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
