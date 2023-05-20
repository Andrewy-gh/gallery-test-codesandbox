export default function TestPage() {
  return (
    // <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
    <div className="container mx-auto outline-double sm:columns-2 md:columns-3 lg:columns-4">
      <div className="mb-6">
        <div className="group relative outline-double">
          <img
            src="https://placehold.jp/c0c0c0/ffffff/300x300.png"
            alt=""
            className="w-full"
          />
          <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-75">
            <div className="flex items-center justify-center relative h-full">
              <p className="text-white text-lg font-bold text-opacity-0 group-hover:text-opacity-100 tracking-wider">
                Testing
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/250x600.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/600x250.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/300x300.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/250x600.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/600x250.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/300x300.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/250x600.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
      <div className="flex justify-center">
        <img
          src="https://placehold.jp/c0c0c0/ffffff/600x250.png"
          alt=""
          className="w-full mb-6"
        />
      </div>
    </div>
  );
}
