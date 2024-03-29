export const runningCalculator = (numbers: any, operator: string) => {
  if (numbers.length === 3) {
    const sortArray = numbers.sort((a: any, b: any) => (a.label < b.label ? -1 : 1))
    numbers = sortArray
  }

  let result = Number(numbers[0].value);
  numbers.map((item: any, key: number) => {
    if (key > 0) {
      if (operator === 'addition') {
        result += Number(item.value)
      } else if (operator === 'subtraction') {
        result -= Number(item.value)
      } else if (operator === 'multiplication') {
        result *= Number(item.value)
      } else if (operator === 'division') {
        result /= Number(item.value)
      }
    }
  })
  
  return result;
}