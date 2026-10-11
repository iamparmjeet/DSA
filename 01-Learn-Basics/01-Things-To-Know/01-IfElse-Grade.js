// Striver A2Z - Step 1.1: If-Else - Student Grade
// Atomic note: lifeos/50-59_Knowledge/51-Computing/DSA/If-Else Branching.md
// Pitfalls: log-inside-logic (untestable), boundary order must descend, validate NaN/range

function grade(marks) {
  if (!Number.isFinite(marks) || marks < 0 || marks > 100) return 'Fail';
  if (marks >= 90) return 'Grade A';
  if (marks >= 70) return 'Grade B';
  if (marks >= 50) return 'Grade C';
  if (marks >= 35) return 'Grade D';
  return 'Fail';
}

class Solution {
  studentGrade(marks) {
    const out = grade(marks);
    console.log(out);
    return out;
  }
}

module.exports = { grade, Solution };

// ponytail: naive range-chain, switch/map only if grades become data-driven
if (require.main === module) {
  const assert = require('node:assert');
  assert.strictEqual(grade(95), 'Grade A');
  assert.strictEqual(grade(90), 'Grade A');
  assert.strictEqual(grade(70), 'Grade B');
  assert.strictEqual(grade(50), 'Grade C');
  assert.strictEqual(grade(35), 'Grade D');
  assert.strictEqual(grade(14), 'Fail');
  assert.strictEqual(grade(-1), 'Fail');
  assert.strictEqual(grade(NaN), 'Fail');
  new Solution().studentGrade(95);
  console.log('ok');
}
