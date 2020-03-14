// groupToPairs takes elements of array and returns pairs of these elements
export function groupToPairs<T>(arr: Array<T>): Array<[T, T]> {
  const result: Array<[T, T]> = [];
  for (let i = 0; i < arr.length / 2; i += 1) {
    result.push([arr[2 * i], arr[2 * i + 1]]);
  }
  return result;
}
