import "./styles.css";
import React, { useState } from "react";
const CountStudent = () => {
  const [student, setStudent] = useState({ name: "John", age: 18 });

  const increaseAge = () => {
    setStudent({ ...student, age: student.age + 1 });
  };

  return (
    <div>
      <p>
        Hello! I'm {student.name}. I'm {student.age} years old.
      </p>
      <button onClick={increaseAge}>Increase age</button>
    </div>
  );
};

export default CountStudent;
