// Space Week Day 1: Stellar Classification
// October 4th marks the beginning of World Space Week. The next seven days will bring you astronomy-themed coding challenges.

// For today's challenge, you are given the surface temperature of a star in Kelvin (K) and need to determine its stellar classification based on the following ranges:

// "O": 30,000 K or higher
// "B": 10,000 K - 29,999 K
// "A": 7,500 K - 9,999 K
// "F": 6,000 K - 7,499 K
// "G": 5,200 K - 5,999 K
// "K": 3,700 K - 5,199 K
// "M": 0 K - 3,699 K
// Return the classification of the given star.

function classification(temp) {
  console.log(temp);

  if (temp >= 30_000) {
    return 'O';
  } else if (temp >= 10_000) {
    return 'B';
  } else if (temp >= 7_500) {
    return 'A';
  } else if (temp >= 6_000) {
    return 'F';
  } else if (temp >= 5_200) {
    return 'G';
  } else if (temp >= 3_700) {
    return 'K';
  } else {
    return 'M';
  }
  return temp;
}
