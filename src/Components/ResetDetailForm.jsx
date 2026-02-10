import { useState, useEffect } from "react";

export default function ResetDetailForm() {
  const [contacts, setContacts] = useState(initialContacts);
  const [selectedId, setSelectedId] = useState(0);
  const selectedContact = contacts.find((c) => c.id === selectedId);

  function handleSave(updatedData) {
    const nextContacts = contacts.map((c) => {
      if (c.id === updatedData.id) {
        return updatedData;
      } else {
        return c;
      }
    });
    setContacts(nextContacts);
  }

  return (
    <div className="min-h-[calc(100vh-40px)] max-h-max p-5 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Contact Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-300">
            Select a contact to edit, then save or reset your changes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactList
            contacts={contacts}
            selectedId={selectedId}
            onSelect={setSelectedId}
          />
          <EditContact
            key={selectedId}
            contact={selectedContact}
            onSave={handleSave}
          />
        </div>
      </div>
    </div>
  );
}

function ContactList({ contacts, selectedId, onSelect }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 pb-3 border-b border-gray-200 dark:border-gray-700">
        Contacts
      </h2>
      <ul className="space-y-2">
        {contacts.map((contact) => (
          <li key={contact.id}>
            <button
              onClick={() => onSelect(contact.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                contact.id === selectedId
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                  : "bg-gray-50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">
                  {contact.id === selectedId ? (
                    <span className="flex items-center">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {contact.name}
                    </span>
                  ) : (
                    contact.name
                  )}
                </span>
                <span className="text-sm opacity-75">{contact.email}</span>
              </div>
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          <span className="font-medium">{contacts.length}</span> contacts total
        </p>
      </div>
    </div>
  );
}

function EditContact({ contact, onSave }) {
  // Keep track of the original contact data and current edits
  const [originalContact] = useState(contact); // This captures the data when component mounts
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);

  // Reset form when contact changes (due to key prop changing)
  useEffect(() => {
    setName(contact.name);
    setEmail(contact.email);
  }, [contact]);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-6 pb-3 border-b border-gray-200 dark:border-gray-700 flex items-center">
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
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
        Edit Contact
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
            placeholder="Enter contact name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-gray-900 dark:text-white bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
            placeholder="Enter contact email"
          />
        </div>

        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-100 dark:border-blue-800">
          <div className="flex items-center text-blue-800 dark:text-blue-300 mb-2">
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-medium">Contact Info</span>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-blue-700 dark:text-blue-400">
              ID:{" "}
              <span className="font-mono bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                {contact.id}
              </span>
            </p>
            <div className="flex gap-4">
              <div className="text-sm">
                <span className="text-blue-600 dark:text-blue-400">
                  Original:{" "}
                </span>
                <span className="font-medium">{originalContact.name}</span>
              </div>
              <div className="text-sm">
                <span className="text-blue-600 dark:text-blue-400">
                  Current:{" "}
                </span>
                <span className="font-medium">{contact.name}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              const updatedData = {
                id: contact.id,
                name: name,
                email: email,
              };
              onSave(updatedData);
            }}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Save Changes
          </button>

          <button
            onClick={() => {
              // Reset to the original contact data from when this form was mounted
              setName(originalContact.name);
              setEmail(originalContact.email);
            }}
            className="px-5 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800 flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset to Original
          </button>
        </div>

        <div className="text-sm text-gray-500 dark:text-gray-400 pt-2">
          <div className="space-y-2">
            <p className="flex items-center">
              <svg
                className="w-4 h-4 mr-2"
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
              "Reset to Original" resets to the data when you first selected
              this contact
            </p>
            <div className="ml-6 flex items-center gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span className="text-xs">
                  Original: {originalContact.name}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                <span className="text-xs">Current in list: {contact.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const initialContacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];
