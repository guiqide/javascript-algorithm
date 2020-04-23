export default function quickSort(list: number[]): number[] {
  if (list.length == 0) {
    return []
  }
  const pivot = list[0]
  const leftArr = []
  const rightArr = []
  for (let i = 1; i < list.length; i++) {
    list[i] < pivot ? leftArr.push(list[i]) : rightArr.push(list[i])
  }
  return quickSort(leftArr).concat(pivot, quickSort(rightArr))
}