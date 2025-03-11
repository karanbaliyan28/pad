import React from "react";

const semesters = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th"];

const SemesterSelector = ({ semester, setSemester }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Semester
      </label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      >
        <option value="" disabled>
          Choose Semester
        </option>
        {semesters.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SemesterSelector;
