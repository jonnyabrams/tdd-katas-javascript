const descending = (n) => {
  const res = Number(
    n
      .toString()
      .split("")
      .map((item) => parseInt(item))
      .sort((a, b) => b - a)
      .join("")
  );
  return res;
};

module.exports = descending;
