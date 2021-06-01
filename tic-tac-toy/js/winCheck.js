function winCheck(cellIndex, message) {
  const win = winCondition[cellIndex].find((line) =>
    line.every((block) => checked[block] === checked[cellIndex])
  );
  if (win || Object.keys(checked).length === 9) {
    message(win);
  }
}

export default winCheck;
