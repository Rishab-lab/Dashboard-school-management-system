import React from "react";
function ClassroomSchedule(){
    return (
      <div>
        <h2>Classroom Schedule</h2>
        <table>
          <thead>
            <tr>
              <th>Classroom</th>
              <th>Subject</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Classroom A</td>
              <td>Math</td>
              <td>09:00 AM - 10:00 AM</td>
            </tr>
            <tr>
              <td>Classroom B</td>
              <td>Science</td>
              <td>10:00 AM - 11:00 AM</td>
            </tr>
            <tr>
              <td>Classroom C</td>
              <td>English</td>
              <td>11:00 AM - 12:00 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  export default ClassroomSchedule;