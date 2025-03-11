import React from "react";

const groups = ["Group A", "Group B"];

const GroupSelector = ({ group, setGroup }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Group</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        value={group}
        onChange={(e) => setGroup(e.target.value)}
      >
        <option value="" disabled>
          Select Group
        </option>
        {groups.map((g) => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
};

export default GroupSelector;
