function createClassRoom(numberOfStudents) {
  function studentSeat(seat) {
    return function() {
      return seat;
    };
  }

  const students = [];
  for (let i = 1; i <= numberOfStudents; i++) {
    students.push(studentSeat(i));
  }

  return students;
}

const classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());