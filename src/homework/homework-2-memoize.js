// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
function memoize(fn) {
  // fn ваш код тут...
  const cache = new Map()

  return (...args) => {
    const someValue = JSON.stringify(args)

    if (!cache.has(someValue)) {
      cache.set(someValue, fn(...args))
    }

    return cache.get(someValue)
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
