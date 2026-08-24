// Striver A2Z - Step 1.2: If-Else vs Switch - starter
// Atomic note: lifeos/50-59_Knowledge/51-Computing/DSA/If-Else Branching.md
// Pitfalls: missing break, type coercion (==), fall-through, default

function gradeIfElse(marks) {
  if (marks >= 90) return 'A';
  else if (marks >= 75) return 'B';
  else if (marks >= 50) return 'C';
  else return 'F';
}

function gradeSwitch(grade) {
  switch (grade) {
    case 'A': return 'Excellent';
    case 'B': return 'Good';
    case 'C': return 'Pass';
    default: return 'Fail';
  }
}

console.log(gradeIfElse(82)); // B
console.log(gradeSwitch('A'));
