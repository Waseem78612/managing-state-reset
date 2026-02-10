import { useState } from "react";

export default function ResetState() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
      <div className="max-w-md w-full">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white text-center mb-2">
            State Reset
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center text-sm">
            Toggle "Take a break" to see component state reset
          </p>
        </div>

        <div className="mb-8">
          {isPaused ? (
            <div className="p-8 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-2xl border-2 border-gray-300 dark:border-gray-700 shadow-lg text-center">
              <div className="text-5xl mb-4">😴</div>
              <p className="text-xl font-medium text-gray-700 dark:text-gray-300">
                See you later!
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
                Counter component is unmounted
              </p>
            </div>
          ) : (
            <Counter />
          )}
        </div>

        <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <label className="flex items-center gap-3 cursor-pointer group">
            <div className="relative">
              <input
                type="checkbox"
                checked={isPaused}
                onChange={(e) => {
                  setIsPaused(e.target.checked);
                }}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </div>
            <div className="flex-1">
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors font-medium">
                Take a break
              </span>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {isPaused ? "Counter is paused" : "Counter is running"}
              </p>
            </div>
            <div
              className={`px-3 py-1 rounded-full text-sm font-medium ${isPaused ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400" : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"}`}
            >
              {isPaused ? "Paused" : "Active"}
            </div>
          </label>
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="h-6 w-6 bg-blue-100 dark:bg-blue-900/40 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg
                className="w-3 h-3 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                <span className="font-medium">Note:</span> When you check "Take
                a break", the Counter component unmounts and its state resets to
                0.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter() {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`
        rounded-2xl p-8 transition-all duration-300
        bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
        border-2 ${hover ? "border-blue-400 dark:border-blue-600 shadow-xl scale-[1.02]" : "border-gray-200 dark:border-gray-700 shadow-lg"}
      `}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <div className="text-center">
        <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          Live Counter
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-gray-800 dark:text-white mb-6">
          {score}
        </h1>

        <div className="mb-6">
          <button
            onClick={() => setScore(score + 1)}
            className="w-full py-4 px-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Current
            </div>
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              {score}
            </div>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Status
            </div>
            <div className="text-xl font-bold text-green-600 dark:text-green-400">
              Active
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${hover ? "bg-blue-500 animate-pulse" : "bg-gray-400"}`}
            ></div>
            <span>
              {hover ? "Hovering over counter" : "Ready for interaction"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
