import React from "react";

const sessions = ["2023-24", "2024-25", "2025-26"];

const SessionSelector = ({ session, setSession }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Session</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        value={session}
        onChange={(e) => setSession(e.target.value)}
      >
        <option value="" disabled>
          Select Session
        </option>
        {sessions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SessionSelector;
