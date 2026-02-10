import { useState } from "react";

export default function ResettingFormWithKey() {
  const [to, setTo] = useState(contacts[0]);

  return (
    <div className="min-h-[calc(100vh-40px)] flex items-center justify-center p-5">
      <div className="bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Chat App with Key Reset
              </h1>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Message input resets when switching contacts
              </p>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Key:{" "}
                <code className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
                  key={to.id}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact List - Left Panel */}
          <div className="lg:col-span-1">
            <ContactList
              contacts={contacts}
              selectedContact={to}
              onSelect={(contact) => setTo(contact)}
            />
          </div>

          {/* Chat - Right Panel */}
          <div className="lg:col-span-2">
            <Chat key={to.id} contact={to} />
          </div>
        </div>

        {/* Key Info Panel */}
        <div className="mt-8 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl">
          <div className="flex items-start gap-3">
            <div className="h-8 w-8 bg-blue-100 dark:bg-blue-900/40 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg
                className="w-4 h-4 text-blue-600 dark:text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-blue-800 dark:text-blue-300 mb-1">
                🔑 Key-based State Reset
              </p>
              <p className="text-sm text-blue-700 dark:text-blue-400">
                The{" "}
                <code className="bg-blue-100 dark:bg-blue-900 px-1.5 py-0.5 rounded text-xs">
                  key={to.id}
                </code>
                prop ensures the Chat component resets when switching contacts.
                Different key = new component instance = fresh state!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

function ContactList({ selectedContact, contacts, onSelect }) {
  return (
    <div className="bg-gray-50 dark:bg-gray-900/50 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-4 h-full">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Contacts ({contacts.length})
      </h2>

      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => {
                onSelect(contact);
              }}
              className={`
                w-full text-left p-4 rounded-xl transition-all duration-200 flex items-center gap-3
                ${
                  selectedContact.id === contact.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md transform -translate-y-0.5"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:shadow-sm"
                }
              `}
            >
              <div
                className={`
                h-10 w-10 rounded-full flex items-center justify-center text-sm font-medium
                ${
                  selectedContact.id === contact.id
                    ? "bg-white text-blue-500"
                    : "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400"
                }
              `}
              >
                {contact.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="font-medium">{contact.name}</div>
                <div
                  className={`text-xs ${selectedContact.id === contact.id ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}
                >
                  {contact.email}
                </div>
              </div>
              {selectedContact.id === contact.id && (
                <div className="h-2 w-2 bg-white rounded-full animate-pulse"></div>
              )}
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400">
          <p className="font-medium mb-1">💡 Try this:</p>
          <p>Type a message, switch contacts, and watch input reset</p>
        </div>
      </div>
    </div>
  );
}

function Chat({ contact }) {
  const [text, setText] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSend = () => {
    if (!text.trim()) return;

    setIsSending(true);
    // Simulate sending
    setTimeout(() => {
      alert(`Message sent to ${contact.email}: "${text}"`);
      setText("");
      setIsSending(false);
    }, 1000);
  };

  const characterCount = text.length;
  const maxCharacters = 300;

  return (
    <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl p-6 h-full flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center gap-4 pb-4 border-b border-gray-200 dark:border-gray-700 mb-6">
        <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {contact.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            Chat with {contact.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {contact.email} • Key:{" "}
            <code className="bg-gray-100 dark:bg-gray-900 px-1.5 py-0.5 rounded text-xs">
              {contact.id}
            </code>
          </p>
        </div>
        <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-900 px-3 py-1.5 rounded-full">
          Component key: {contact.id}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your Message
          </label>
          <textarea
            value={text}
            placeholder={`Type your message to ${contact.name}...`}
            onChange={(e) => setText(e.target.value)}
            className="w-full h-48 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-4 focus:ring-blue-500/30 focus:border-blue-500 dark:focus:ring-blue-500/20 dark:focus:border-blue-500 dark:bg-gray-900 dark:text-white resize-none transition-colors"
            maxLength={maxCharacters}
          />
          <div className="flex justify-between mt-2">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {characterCount > 0 && (
                <span
                  className={
                    characterCount > maxCharacters * 0.8
                      ? "text-orange-500"
                      : ""
                  }
                >
                  {characterCount}/{maxCharacters} characters
                </span>
              )}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              Press Ctrl+Enter to send
            </div>
          </div>
        </div>

        <div className="mt-auto">
          <button
            onClick={handleSend}
            disabled={!text.trim() || isSending}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          >
            {isSending ? (
              <>
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                Send to {contact.email}
              </>
            )}
          </button>
        </div>
      </div>

      {/* Chat Status */}
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full"></div>
            <span>
              Message will reset when switching contacts (key={contact.id})
            </span>
          </div>
          <div className="text-xs">
            <span className="bg-gray-100 dark:bg-gray-900 px-2 py-1 rounded">
              key={contact.id}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
