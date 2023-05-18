function Gallery({ images }) {
  return (
    <>
      <div>Hello World</div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3001/images'); // Replace with your JSON server endpoint
  const data = await res.json();

  return {
    props: {
      images: data,
    },
    revalidate: 60, // Number of seconds to re-generate the page (optional)
  };
}

export default Gallery;
