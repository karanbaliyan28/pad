import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerComponent = ({ date, setDate }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Date</label>
      <DatePicker
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 sm:text-sm"
        selected={date}
        onChange={(date) => setDate(date)}
      />
    </div>
  );
};

export default DatePickerComponent;
