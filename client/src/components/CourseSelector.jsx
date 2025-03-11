import React from "react";

const Courses = ["CSE", "Pharmacy", "Nursing"];

const CourseSelector = ({ selectedClass, setSelectedClass }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Course</label>
      <select
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        value={selectedClass}
        onChange={(e) => setSelectedClass(e.target.value)}
      >
        <option value="" disabled>
          Select Course
        </option>
        {Courses.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CourseSelector;
