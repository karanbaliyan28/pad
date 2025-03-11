import React, { useState } from 'react';
import {
  SessionSelector,
  SemesterSelector,
  CourseSelector,
  SectionSelector,
  GroupSelector,
  DatePickerComponent,
  StudentList
} from './index';

const AdminDashboard = () => {
  const [session, setSession] = useState('');
  const [semester, setSemester] = useState('');
  const [course, setCourse] = useState('');
  const [section, setSection] = useState('');
  const [group, setGroup] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = () => {
    console.log('Updating attendance for the following details:');
    console.log('Session:', session);
    console.log('Semester:', semester);
    console.log('Source:', course);
    console.log('Section:', section);
    console.log('Group:', group);
    console.log('Date:', date);
    // Add your actual form submission logic here

  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome, Admin</h1>
        <p className="mb-4">Designation: Faculty</p>
        <p className="mb-4">Department: Computer Science</p>
        <p className="mb-4">Email: admin@example.com</p>
        <div className="mb-4">
          <SessionSelector session={session} setSession={setSession} />
        </div>
        <div className="mb-4">
          <SemesterSelector semester={semester} setSemester={setSemester} />
        </div>
        <div className="mb-4">
          <CourseSelector selectedCourse={course} setCourse={setCourse} />
        </div>
        <div className="mb-4">
          <SectionSelector section={section} setSection={setSection} />
        </div>
        <div className="mb-4">
          <GroupSelector group={group} setGroup={setGroup} />
        </div>
        <div className="mb-4">
          <DatePickerComponent date={date} setDate={setDate} />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={handleSubmit}
        >
          ShowStudents
        </button>
        <StudentList
          session={session}
          semester={semester}
          selectedCourse={course}
          section={section}
          group={group}
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
