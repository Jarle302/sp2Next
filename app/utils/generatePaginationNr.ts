export default function generatePaginationNr(arr: any[]) {
  const numberOfButtons = arr.length / 10;

  const buttons = [];

  for (let i = 0; i < numberOfButtons; i++) {
    const button = i + 1;
    buttons.push(button);
  }
  return buttons;
}
