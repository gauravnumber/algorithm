/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let left = 0, right = -1;
  let min = "", map = {};

  t.split("").forEach((v) => {
    if (map.hasOwnProperty(v)) {
      map[v]++;
    } else {
      map[v] = 1;
    }
  });

  let count = Object.keys(map).length;

  while (right <= s.length) {
    if (count === 0) {
      const current = s[left];

      if (map.hasOwnProperty(current)) {
        map[current]++;
      }
      if (map[current] > 0) {
        count++;
      }

      const temp = s.substring(left, right + 1);

      if (min === "") {
        min = temp;
      } else {
        min = min.length <= temp.length ? min : temp;
      }

      left++;
    } else {
      right++;

      const current = s[right];
      if (map.hasOwnProperty(current)) {
        map[current]--;
      }
      if (map[current] === 0) {
        count--;
      }
    }
  }

  return min;
};
