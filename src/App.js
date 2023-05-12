import React from 'react';
import StudentList from './Components/StudentList';
import TeacherList from './Components/TeacherList';
import ClassroomSchedule from './Components/ClassroomSchedule'; 
import AttendanceSummary from './Components/AttendanceSummary';
import './App.css';

function App(){
  return (
    <div>
      <h1>School Management Dashboard</h1>
      <div className="dashboard-grid">
        <StudentList />
        <TeacherList />
        <ClassroomSchedule />
        <AttendanceSummary />
      </div>
    </div>
  );
};

export default App;
