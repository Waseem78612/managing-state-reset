import { useState } from "react";

export default function FixedDisappearingInputText() {
  const [showHint, setShowHint] = useState(false);

  if (showHint) {
    return (
      <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
        <div className="max-w-md w-full">
          <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Fix disappearing input text
            </h3>
            <p className="text-blue-700 dark:text-blue-400 italic font-medium">
              💡 Hint: Your favorite city?
            </p>
          </div>
          <Form />
          <div className="mt-8">
            <button
              onClick={() => {
                setShowHint(!showHint);
              }}
              className="w-full py-4 px-6 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.59 6.59m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                  />
                </svg>
                Hide hint
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
      <div className="max-w-md w-full">
        <Form />
        <div className="mt-8">
          <button
            onClick={() => {
              setShowHint(true);
            }}
            className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Show hint
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function Form() {
  const [text, setText] = useState("");

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          Favorite City Input
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Type your favorite city in the textarea below
        </p>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Your Favorite City
          <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
            ({text.length}/100 characters)
          </span>
        </label>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter the name of your favorite city..."
          className="w-full h-40 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:focus:border-blue-500 dark:bg-gray-900 dark:text-white resize-none transition-colors"
          maxLength={100}
        />
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-600 dark:text-gray-400">
              Input active
            </span>
          </div>
          <div className="text-gray-500 dark:text-gray-400">
            {text.length} characters
          </div>
        </div>
      </div>
    </div>
  );
}
