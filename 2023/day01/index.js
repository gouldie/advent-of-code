/*
  findLast
  lastIndexOf
*/

import fs from 'fs'

const input = fs.readFileSync('2023/day01/input.txt', { encoding: 'utf-8' }).split('\n')

function part1() {
  const result = input.reduce((acc, cur) => {
    const lineArr = cur.split('')
    const firstDigit = lineArr.find(char => Number.isInteger(Number(char)))
    const lastDigit = lineArr.findLast(char => Number.isInteger(Number(char)))

    const value = Number(String(firstDigit) + String(lastDigit))

    return acc + value
  }, 0)

  return result
}

function part2() {
  const digits = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
  }

  const matches = [...Object.keys(digits), ...Object.values(digits)]

  const result = input.reduce((acc, cur) => {
    const firstMatch = {
      index: -1,
      value: ''
    }

    const lastMatch = {
      index: -1,
      value: ''
    }

    matches.forEach(match => {
      const firstIndex = cur.indexOf(match)
      const lastIndex = cur.lastIndexOf(match)

      if (firstIndex >= 0 && (firstMatch.index === -1 || firstIndex < firstMatch.index)) {
        firstMatch.index = firstIndex
        firstMatch.value = Object.keys(digits).includes(match) ? digits[match] : match
      }

      if (lastIndex >= 0 && (lastMatch.index === -1 || lastIndex > lastMatch.index)) {
        lastMatch.index = lastIndex
        lastMatch.value = Object.keys(digits).includes(match) ? digits[match] : match
      }
    })

    const value = Number(String(firstMatch.value) + String(lastMatch.value))

    return acc + value
  }, 0)

  return result
}

console.log(part1())
console.log(part2())
