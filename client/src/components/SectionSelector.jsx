import React from 'react';

const sections = ['A', 'B', 'C', 'D'];

const SectionSelector = ({ section, setSection }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Section</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        value={section}
        onChange={(e) => setSection(e.target.value)}
      >
        <option value="" disabled>Select Section</option>
        {sections.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
    </div>
  );
};

export default SectionSelector;