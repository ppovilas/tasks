// // task1
// const firstName = 'Povilas'
// const lastName = 'Patlaba'
// const birthYear = 1995
// let currentYear = 2022
// let age = currentYear - birthYear

// console.log(`Aš esu ${firstName} ${lastName}. Man yra ${age} metai.`)

// task2
// let numberOne = Math.random() * 4
// let numberTwo = Math.random() * 4
// console.log(numberOne, 'Pirmas numers')
// console.log(numberTwo, 'Antras numeris')
// if (numberOne > numberTwo) {
//   console.log((numberOne / numberTwo).toFixed(2))
// } else if (numberOne < numberTwo) {
//   console.log((numberTwo / numberOne).toFixed(2))
// }

// task3
// let numberOne = Math.floor(Math.random() * 26)
// let numberTwo = Math.floor(Math.random() * 26)
// let numberThree = Math.floor(Math.random() * 26)
// console.log(numberOne)
// console.log(numberTwo)
// console.log(numberThree)

// if (
//   numberOne === numberTwo ||
//   numberOne === numberThree ||
//   numberTwo === numberThree
// ) {
//   console.log('No middle number found')
// } else if (
//   (numberOne > numberTwo && numberOne < numberThree) ||
//   (numberOne < numberTwo && numberOne > numberThree)
// ) {
//   console.log(numberOne)
// } else if (
//   (numberTwo > numberOne && numberTwo < numberThree) ||
//   (numberTwo < numberOne && numberTwo > numberThree)
// ) {
//   console.log(numberTwo)
// } else if (
//   (numberThree > numberOne && numberThree < numberTwo) ||
//   (numberThree < numberOne && numberThree > numberTwo)
// ) {
//   console.log(numberThree)
// }

//task4

// task5
// let numberOne = Math.random() * 2
// let numberTwo = Math.random() * 2
// let numberThree = Math.random() * 2
// let numberFour = Math.random() * 2
// console.log(numberOne)

// let zero = '0'
// let one = '1'
// let two = '2'

// let zeros = numberOne.toString().split(zero).length - 1
// console.log(zeros)

// let ones = numberOne.toString().split(one).length - 1
// console.log(ones)

// let twos = numberOne.toString().split(two).length - 1
// console.log(twos)

// //task6
// let up = 10
// let bottom = -10

// let numberOne = Math.floor(Math.random() * (1 + up - bottom)) + bottom
// console.log(numberOne)
// let numberTwo = Math.floor(Math.random() * (1 + up - bottom)) + bottom
// console.log(numberTwo)
// let numberThree = Math.floor(Math.random() * (1 + up - bottom)) + bottom
// console.log(numberThree)

// if (numberOne < 0) {
//   console.log(`[${numberOne}]`)
// } else if (numberOne === 0) {
//   console.log(`(${numberOne})`)
// } else if (numberOne > 0) {
//   console.log(`{${numberOne}}`)
// }

// if (numberTwo < 0) {
//   console.log(`[${numberTwo}]`)
// } else if (numberTwo === 0) {
//   console.log(`(${numberTwo})`)
// } else if (numberTwo > 0) {
//   console.log(`{${numberTwo}}`)
// }

// if (numberThree < 0) {
//   console.log(`[${numberThree}]`)
// } else if (numberThree === 0) {
//   console.log(`(${numberThree})`)
// } else if (numberThree > 0) {
//   console.log(`{${numberThree}}`)
// }

// //Ar trikampis (4 uzduotis):
// To determine if 3 side lengths are a triangle, use the triangle inequality theorem, which states that the sum of 2 sides of a triangle must be greater than the third side. Therefore, all you have to do is add together each combination of 2 sides to see if it's greater than the third side.
