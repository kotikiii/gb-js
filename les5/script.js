// objects
// Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена дней недели. Выведите на экран “Вторник”
// Создайте объект user с ключами 'name', 'surname', ‘age’. Выведите на экран фамилию, имя и возраст через дефис.
// Добавьте в объект user свойство отчество, которое пользователь должен ввести с клавиатуры
// Удалите свойство surname

const weekdays = {
  1: "mon",
  2: "tue",
  3: "wed",
  4: "thu",
  5: "fri",
  6: "sat",
  7: "sun",
};

console.log(weekdays[2]);

const user = {
  name: "robiya",
  surname: "pacino",
  age: 17,
};

console.log(`${user.name}-${user.surname}-${user.age}`);
//user.secondName = prompt('Input ur second name')
console.log(user);

delete user.surname;
console.log(user);

// Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
// const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
// const obj = {x: 1, y: 2, z: 3};
// Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат.

const arr1 = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
const days = {};
for (let i = 0; i < arr1.length; i++) {
  let key = arr1[i];
  let value = arr2[i];
  days[key] = value;
}

console.log(days);

const obj = { x: 1, y: 2, z: 3 };
for (const key in obj) {
  obj[key] **= 2;
}

console.log(obj);

//Найдите сумму элементов приведенного объекта.
const obj1 = {
  key1: {
    key1: 1,
    key2: 2,
    key3: 3,
  },
  key2: {
    key1: 4,
    key2: 5,
    key3: 6,
  },
  key3: {
    key1: 7,
    key2: 8,
    key3: 9,
  },
};

let sum = 0;

for (const key in obj1) {
  for (const key2 in obj1[key]) {
    sum += obj1[key][key2];
  }
}

console.log(sum);

// оздайте объект riddles
// Добавьте свойства question, answer
// создайте метод askQuestion который спрашивает у пользователя вопрос question и сравнивает ответ с answer
// Если ответил неверно, то в консоль выводится текст: “вы проиграли”
// * По желанию, создать 2 подсказки, если пользователь ответил неверно

const riddles = {
  question: "which dog doesnt bite?",
  answer: "hot dog",
};

// const askQuestion = () => {
//   let userAnswer = prompt(riddles.question);
//   if (userAnswer === riddles.answer) {
//     console.log("Good job");
//   } else {
//     console.log("Nope");
//     alert("You can eat this kind of dog");
//     askQuestion();
//   }
// };

//askQuestion();

const products = [
  {
    id: 3,
    price: 127,
    photos: ["1.jpg", "2.jpg"],
  },
  {
    id: 5,
    price: 499,
    photos: [],
  },
  {
    id: 10,
    price: 26,
    photos: ["3.jpg"],
  },
  {
    id: 8,
    price: 78,
  },
];
