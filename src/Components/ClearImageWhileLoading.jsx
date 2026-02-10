import { useState, useEffect } from "react";

export default function ClearImageWhileLoading() {
  const [index, setIndex] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState("");
  const hasNext = index < images.length - 1;

  // Update currentImageSrc when index changes
  useEffect(() => {
    if (images[index]) {
      setCurrentImageSrc(images[index].src);
    }
  }, [index]);

  function handleClick() {
    // Clear the image immediately
    setCurrentImageSrc("");

    // Update index after a tiny delay to ensure clearing happens first
    setTimeout(() => {
      if (hasNext) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    }, 10);
  }

  let image = images[index];

  return (
    <div className="min-h-[calc(100vh-40px)] max-h-max p-5 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Travel Gallery
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Clear an image while it’s loading
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleClick}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center shadow-md hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
                Next Image
              </button>

              <button
                onClick={() => {
                  setCurrentImageSrc("");
                  setTimeout(() => {
                    setIndex(0);
                  }, 10);
                }}
                className="px-5 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200"
              >
                Reset
              </button>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg px-4 py-3">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                Image{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {index + 1}
                </span>{" "}
                of{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  {images.length}
                </span>
              </h3>
            </div>
          </div>

          <div className="mb-6">
            <div className="relative bg-gray-100 dark:bg-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-inner min-h-[400px] flex items-center justify-center">
              {currentImageSrc ? (
                <img
                  src={currentImageSrc}
                  alt={image.place}
                  className="w-full h-full object-cover transition-opacity duration-300"
                  onLoad={() => console.log("Image loaded")}
                  onError={() => console.log("Error loading image")}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-8 text-gray-500 dark:text-gray-400">
                  <svg
                    className="w-16 h-16 mb-4 animate-pulse"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-lg font-medium">Loading image...</p>
                  <p className="text-sm mt-2">
                    Please wait while the next image loads
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-800/50 rounded-xl p-6 border border-blue-100 dark:border-gray-700">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 mr-3 text-blue-600 dark:text-blue-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {image.place}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-300">
              A beautiful destination waiting to be explored. This image clears
              immediately when you click "Next" to ensure the description always
              matches the displayed image.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrentImageSrc("");
                  setTimeout(() => {
                    setIndex(i);
                  }, 10);
                }}
                className={`p-3 rounded-lg border transition-all duration-200 ${
                  i === index
                    ? "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700 ring-2 ring-blue-500 dark:ring-blue-600"
                    : "bg-gray-50 dark:bg-gray-700/50 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <div className="text-sm font-medium text-gray-800 dark:text-gray-200 truncate">
                  {img.place}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Image {i + 1}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>
                The image clears immediately when you click "Next" to ensure the
                location description always matches the displayed image.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const images = [
  {
    place: "Penang, Malaysia",
    src: "https://i.imgur.com/FJeJR8M.jpg",
  },
  {
    place: "Lisbon, Portugal",
    src: "https://i.imgur.com/dB2LRbj.jpg",
  },
  {
    place: "Bilbao, Spain",
    src: "https://i.imgur.com/z08o2TS.jpg",
  },
  {
    place: "Valparaíso, Chile",
    src: "https://i.imgur.com/Y3utgTi.jpg",
  },
  {
    place: "Schwyz, Switzerland",
    src: "https://i.imgur.com/JBbMpWY.jpg",
  },
  {
    place: "Prague, Czechia",
    src: "https://i.imgur.com/QwUKKmF.jpg",
  },
  {
    place: "Ljubljana, Slovenia",
    src: "https://i.imgur.com/3aIiwfm.jpg",
  },
];
