// Striver A2Z - Step 1.2: Switch Case - Weekday
// TUF+ "Switch Case" (Easy) | constraint 0 <= day <= 50 | 1..7 -> day name, else "Invalid"
// Atomic note: lifeos/50-59_Knowledge/51-Computing/DSA/Switch Statement.md
//
// Why two layers: weekDay() is pure so it can be asserted on; Solution prints because the
// judge reads stdout. The submission is the class block only - no driver, no top-level helper.
// Pitfalls: enumerating `case 0` instead of `default` (2.5 -> undefined), implicit global,
// extra stdout from an own driver breaking the judge's output diff.

function weekDay(day) {
  switch (day) {
    case 1: return 'Monday';
    case 2: return 'Tuesday';
    case 3: return 'Wednesday';
    case 4: return 'Thursday';
    case 5: return 'Friday';
    case 6: return 'Saturday';
    case 7: return 'Sunday';
    default: return 'Invalid';
  }
}

class Solution {
  whichWeekDay(day) {
    const out = weekDay(day);
    console.log(out);
    return out;
  }
}

module.exports = { weekDay, Solution };

if (require.main === module) {
  const assert = require('node:assert');
  assert.strictEqual(weekDay(1), 'Monday');
  assert.strictEqual(weekDay(3), 'Wednesday');
  assert.strictEqual(weekDay(7), 'Sunday');
  assert.strictEqual(weekDay(0), 'Invalid');
  assert.strictEqual(weekDay(8), 'Invalid');
  assert.strictEqual(weekDay(49), 'Invalid');
  assert.strictEqual(weekDay(NaN), 'Invalid');
  assert.strictEqual(weekDay(1.5), 'Invalid');
  assert.strictEqual(weekDay('3'), 'Invalid');
  new Solution().whichWeekDay(3);
  console.log('ok');
}
