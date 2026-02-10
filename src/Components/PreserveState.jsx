import { useState } from "react";

export default function PreserveState() {
  const [isFancy, setIsFancy] = useState(false);

  if (isFancy) {
    return (
      <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
        <div className="max-w-md w-full">
          <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-6 text-center">
            Preserve State
          </h3>
          <Counter isFancy={true} />
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <label className="flex items-center gap-3 cursor-pointer group">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={isFancy}
                  onChange={(e) => {
                    setIsFancy(e.target.checked);
                  }}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
              </div>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                Use fancy styling
              </span>
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
      <div className="max-w-md w-full">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
          Preserve State
        </h3>
        <Counter isFancy={false} />
        <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={isFancy}
                onChange={(e) => {
                  setIsFancy(e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-600"></div>
            </div>
            <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
              Use fancy styling
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        rounded-2xl p-8 transition-all duration-300
        ${
          isFancy
            ? "bg-gradient-to-br from-purple-600 to-pink-600 shadow-xl"
            : "bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700"
        }
        ${hover ? "scale-[1.02] shadow-2xl" : ""}
      `}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div className="text-center">
        <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          Counter Value
        </div>
        <h1
          className={`
          text-7xl md:text-8xl font-bold mb-6
          ${isFancy ? "text-white" : "text-gray-800 dark:text-white"}
        `}
        >
          {score}
        </h1>

        <button
          onClick={() => setScore(score + 1)}
          className={`
            w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300
            ${
              isFancy
                ? "bg-white text-purple-600 hover:bg-gray-100 hover:scale-105"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105"
            }
            shadow-md hover:shadow-lg
          `}
        >
          <div className="flex items-center justify-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add one
          </div>
        </button>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div
            className={`
            text-sm flex items-center justify-center gap-2
            ${isFancy ? "text-white/80" : "text-gray-500 dark:text-gray-400"}
          `}
          >
            <div
              className={`h-2 w-2 rounded-full ${isFancy ? "bg-white" : "bg-gray-400"}`}
            ></div>
            <span>{isFancy ? "Fancy mode active" : "Simple mode active"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
