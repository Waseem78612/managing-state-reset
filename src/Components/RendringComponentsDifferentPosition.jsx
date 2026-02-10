import { useState } from "react";

export default function RendringComponentsDifferentPosition() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
      <div className="max-w-md w-full">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">
            Rendering a component in different positions
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Two independent counters with && operator
          </p>
        </div>

        <div className="mb-8">
          {isPlayerA && <Counter person="Taylor" />}
          {!isPlayerA && <Counter person="Sarah" />}
        </div>

        <div className="p-5 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              setIsPlayerA(!isPlayerA);
            }}
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
                  d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                />
              </svg>
              Next player!
            </div>
            <div className="text-sm font-normal mt-1 opacity-90">
              {isPlayerA ? "Switching to Sarah" : "Switching to Taylor"}
            </div>
          </button>

          <div className="mt-4 p-3 bg-white dark:bg-gray-900 rounded-lg">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div
                  className={`h-2 w-2 rounded-full ${isPlayerA ? "bg-blue-500" : "bg-purple-500"}`}
                ></div>
                <span className="text-gray-700 dark:text-gray-300">
                  Current player:{" "}
                  <span className="font-semibold">
                    {isPlayerA ? "Taylor" : "Sarah"}
                  </span>
                </span>
              </div>
              <div className="text-gray-500 dark:text-gray-400">
                {isPlayerA ? "👤 Player A" : "👤 Player B"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Counter({ person }) {
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
        <div className="flex items-center justify-center gap-3 mb-6">
          <div
            className={`h-12 w-12 rounded-xl flex items-center justify-center ${person === "Taylor" ? "bg-gradient-to-r from-blue-500 to-cyan-500" : "bg-gradient-to-r from-purple-500 to-pink-500"}`}
          >
            <span className="text-xl text-white">
              {person === "Taylor" ? "👨" : "👩"}
            </span>
          </div>
          <div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              {person === "Taylor" ? "Player A" : "Player B"}
            </div>
            <div className="text-xl font-bold text-gray-800 dark:text-white">
              {person}'s Score
            </div>
          </div>
        </div>

        <div className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          Current Score
        </div>
        <h1 className="text-7xl md:text-8xl font-bold text-gray-800 dark:text-white mb-6">
          {score}
        </h1>

        <button
          onClick={() => setScore(score + 1)}
          className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl mb-6"
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

        <div className="grid grid-cols-2 gap-4">
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Player
            </div>
            <div className="text-lg font-bold text-gray-800 dark:text-white">
              {person}
            </div>
          </div>
          <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
              Status
            </div>
            <div className="text-lg font-bold text-green-600 dark:text-green-400">
              Active
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
            <div
              className={`h-2 w-2 rounded-full ${hover ? "bg-blue-500 animate-pulse" : "bg-gray-400"}`}
            ></div>
            <span>{hover ? "Hovering" : "Ready"} • Using && operator</span>
          </div>
        </div>
      </div>
    </div>
  );
}
