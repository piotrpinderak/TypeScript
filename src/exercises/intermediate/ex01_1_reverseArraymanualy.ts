function reverseArray<T>(arr: T[]): T[] {
  const result: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }
  return result;
}

const liczby = [1, 2, 3, 4, 5, 9999999999];
console.log(reverseArray(liczby));

const litery = ["W","O","J","T","E","K"];
console.log(reverseArray(litery));
