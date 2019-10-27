const validAnagram = require('./anagram')

test('two empty strings are equal', () => {
  expect(validAnagram('', '')).toBe(true)
})

test('aaz is not the same that zza', () => {
  expect(validAnagram('aaz', 'zza')).toBe(false)
})

test('anagram and nagaram are equal', () => {
  expect(validAnagram('anagram', 'nagaram')).toBe(true)
})

test('rat is not the same as car', () => {
  expect(validAnagram('rat', 'car')).toBe(false)
})

test('awesome is not the same that awesom', () => {
  expect(validAnagram('awesome', 'awesom')).toBe(false)
})

test('amanaplanacanalpanama is not the same that acanalmanplanpamana', () => {
  expect(validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana')).toBe(false)
})

test('qwerty is the same that qeywrt', () => {
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true)
})

test('texttwisttime is the same that timetwisttext', () => {
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true)
})