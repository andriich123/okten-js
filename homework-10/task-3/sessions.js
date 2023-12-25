const attendances = JSON.parse(localStorage.getItem("attendance")) || [];

function displayAttendance(attendanceDate) {
  const date = new Date(attendanceDate);
  const block = document.createElement("p");
  block.innerText = `Attendance time: ${date.toLocaleTimeString()}, date: ${date.toLocaleDateString()}`;
  document.body.appendChild(block);
}

for (const attendanceDate of attendances) {
  displayAttendance(attendanceDate);
}
