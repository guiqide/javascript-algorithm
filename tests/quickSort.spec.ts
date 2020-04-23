import { mocked } from 'ts-jest/utils'
import { test1 } from '../mocks/disorderly_array'
import { test1 as orderedTest1 } from '../mocks/ordered_array'
import quickSort from '../sort/quickSort'

test('sort right', () => {
  expect(quickSort(test1.list)).toEqual(orderedTest1.list)
})