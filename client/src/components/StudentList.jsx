import React, { useState, useEffect } from 'react';

const dummyData = {
  '2023-24': {
    '1st': {
      'CSE': {
        'C1': [
          {
            id: 2311981269,
            course: "CSE",
            classSection: "C",
            classGroup: "C1",
            name: 'Student A1',
            currentSubjects: [
              {
                subName: 'OS',
                st1marks: 30,
                st2marks: 30,
                strmarks: 35,
                finalmarks: 50,
                attendancePercentage: '76%',
                classDelivered: 20,
                attended: 16,
                subjectTeacherName: "Lalika Kakkar"
              },
              // Add more subjects as needed
            ]
          },
          // Add more students as needed
        ],
        'C2': [
          // Add students for C2
        ],
      },
      'Pharmacy': {
        'P1': [
          // Add students for P1
        ],
        'P2': [
          // Add students for P2
        ],
      },
      'Nursing': {
        'N1': [
          // Add students for N1
        ],
        'N2': [
          // Add students for N2
        ],
      },
    },
    // Add more semesters as needed
  },
  // Add more sessions and their respective data as needed
};

const StudentList = ({ session, semester, selectedClass, group }) => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (session && semester && selectedClass && group) {
      setStudents(dummyData[session][semester][selectedClass][group]);
    }
  }, [session, semester, selectedClass, group]);

  const [attendance, setAttendance] = useState({});

  const toggleAttendance = (studentId, subjectIndex) => {
    setAttendance({
      ...attendance,
      [studentId]: {
        ...attendance[studentId],
        [subjectIndex]: !attendance[studentId]?.[subjectIndex]
      },
    });
  };

  if (!session || !semester || !selectedClass || !group) {
    return null;
  }

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold mb-2">Students</h3>
      <ul className="list-disc pl-5">
        {students.map((student) => (
          <li key={student.id} className="mb-2">
            <div className="flex justify-between items-center">
              <span>{student.name}</span>
            </div>
            <ul className="list-inside list-disc">
              {student.currentSubjects.map((subject, index) => (
                <li key={index} className="flex justify-between items-center">
                  <span>{subject.subName}</span>
                  <span>{subject.attendancePercentage}</span>
                  <button
                    className={`px-4 py-2 rounded ${attendance[student.id]?.[index] ? 'bg-green-500' : 'bg-red-500'} text-white`}
                    onClick={() => toggleAttendance(student.id, index)}
                  >
                    {attendance[student.id]?.[index] ? 'Present' : 'Absent'}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
