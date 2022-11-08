// Задача на проміс.
// Виконайте послідовне виконання промісу `arrayHandler` стільки разів, скільки елементів знаходиться
// в масиві array. Кожен наступний проміс повинен виконатись лише тоді коли попередній успішно завершився.
// Функція `arrayHandler` приймає аргументом значення з поточної ітерації масиву `array`

export const arrayHandler = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === Number) {
        reject('Error')
      }
      resolve(num)
    }, num * 1000)
  })
}

const array = [1, 2, 3, 4, 5]

let count = 0

const iterateFunc = () => {
  if (count < array.length) {
    arrayHandler(array[count])
      .then(res => {
        console.log(res)
        count++
        iterateFunc()
      })
      .catch(rej => {
        console.log(rej)
      })
  }
}

iterateFunc()