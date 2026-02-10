import { useState } from "react";

export default function SwapTwoFormFields() {
  const [reverse, setReverse] = useState(false);

  const checkbox = (
    <label className="flex items-center space-x-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200">
      <input
        type="checkbox"
        checked={reverse}
        onChange={(e) => setReverse(e.target.checked)}
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 cursor-pointer"
      />
      <span className="text-gray-800 dark:text-gray-200 font-medium">
        Reverse order
      </span>
    </label>
  );

  return (
    <div className="min-h-[calc(100vh-40px)] max-h-max py-5 px-5 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Form Field Swapper
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Toggle the checkbox to swap the order of form fields
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8 mb-6 border border-gray-200 dark:border-gray-700">
          <div className="space-y-6 mb-8">
            {reverse ? (
              <>
                <Field key="last name" label="Last name" />
                <Field key="first name" label="First name" />
              </>
            ) : (
              <>
                <Field key="first name" label="First name" />
                <Field key="last name" label="Last name" />
              </>
            )}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="w-full sm:w-auto">{checkbox}</div>

            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div
                    className={`w-3 h-3 rounded-full ${reverse ? "bg-blue-500" : "bg-green-500"}`}
                  ></div>
                  <span>
                    Current order: {reverse ? "Last → First" : "First → Last"}
                  </span>
                </div>
              </div>

              <button
                onClick={() => setReverse(!reverse)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Toggle Order
              </button>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 dark:bg-gray-800/50 rounded-lg p-5 border border-blue-100 dark:border-gray-700">
          <h3 className="font-semibold text-gray-800 dark:text-white mb-3 flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-blue-500"
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
              ></path>
            </svg>
            How it works
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Each field maintains its own state. When you reverse the order,
            React preserves the input values because each field has a unique{" "}
            <code className="px-1.5 py-0.5 bg-gray-200 dark:bg-gray-700 rounded text-sm">
              key
            </code>{" "}
            prop. Try typing in both fields, then toggle the checkbox to see the
            text stay with its respective field.
          </p>
        </div>
      </div>
    </div>
  );
}

function Field({ label }) {
  const [text, setText] = useState("");

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        <input
          type="text"
          value={text}
          placeholder={`Enter your ${label.toLowerCase()}`}
          onChange={(e) => setText(e.target.value)}
          className="w-full px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200 placeholder-gray-500 dark:placeholder-gray-400"
        />
        {text && (
          <button
            onClick={() => setText("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Clear input"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        )}
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        Character count: <span className="font-semibold">{text.length}</span>
      </p>
    </div>
  );
}
