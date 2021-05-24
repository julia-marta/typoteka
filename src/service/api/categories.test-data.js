'use strict';

module.exports.mockCategories = [
  `Кино`,
  `Железо`,
  `Разное`,
  `Без рамки`,
  `IT`,
  `Программирование`,
  `Путешествия`
];

module.exports.mockArticles = [
  {
    title: `Лучшие рок-музыканты 20-века`,
    date: `2021-02-21T06:22:24.938Z`,
    announce: `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Собрать камни бесконечности легко, если вы прирожденный герой. Золотое сечение — соотношение двух величин, гармоническая пропорция. Программировать не настолько сложно, как об этом говорят.`,
    fullText: `Простые ежедневные упражнения помогут достичь успеха. Золотое сечение — соотношение двух величин, гармоническая пропорция. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Это один из лучших рок-музыкантов. Собрать камни бесконечности легко, если вы прирожденный герой. Он написал больше 30 хитов. Первая большая ёлка была установлена только в 1938 году. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Из под его пера вышло 8 платиновых альбомов. Как начать действовать? Для начала просто соберитесь. Ёлки — это не просто красивое дерево. Это прочная древесина. Достичь успеха помогут ежедневные повторения. Программировать не настолько сложно, как об этом говорят. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
    categories: [
      `Кино`,
      `Железо`
    ],
    image: `forest@1x.jpg`,
  },
  {
    title: `Как достигнуть успеха не вставая с кресла`,
    date: `2021-03-31T04:40:58.077Z`,
    announce: `Первая большая ёлка была установлена только в 1938 году. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь. Простые ежедневные упражнения помогут достичь успеха.`,
    fullText: `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравятся только игры. Это один из лучших рок-музыкантов. Достичь успеха помогут ежедневные повторения. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать. Простые ежедневные упражнения помогут достичь успеха. Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете. Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле? Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами. Ёлки — это не просто красивое дерево. Это прочная древесина. Золотое сечение — соотношение двух величин, гармоническая пропорция. Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем. Первая большая ёлка была установлена только в 1938 году. Из под его пера вышло 8 платиновых альбомов. Он написал больше 30 хитов. Программировать не настолько сложно, как об этом говорят. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Как начать действовать? Для начала просто соберитесь.`,
    categories: [
      `Разное`,
      `Без рамки`,
      `IT`
    ],
    image: `forest@1x.jpg`,
  },
  {
    title: `Как начать программировать`,
    date: `2021-01-26T13:03:42.620Z`,
    announce: `Золотое сечение — соотношение двух величин, гармоническая пропорция. Вы можете достичь всего. Стоит только немного постараться и запастись книгами. Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике. Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много. Как начать действовать? Для начала просто соберитесь.`,
    fullText: `Он написал больше 30 хитов.`,
    categories: [
      `Программирование`,
      `Путешествия`
    ],
    image: `forest@1x.jpg`,
  }
];

module.exports.mockUsers = [
  {
    firstname: `Иван`,
    lastname: `Иванов`,
    email: `ivan@ya.ru`,
    password: `0403942d9d1bd8c2f93ea2f08abd7ba7`,
    avatar: `avatar.jpg`,
    admin: true
  },
  {
    firstname: `Петр`,
    lastname: `Петров`,
    email: `petr@ya.ru`,
    password: `0403942d9d1bd8c2f93ea2f08abd7ba7`,
    avatar: `avatar.jpg`,
    admin: false
  },
];

module.exports.mockComments = [
  {
    text: `Мне кажется или я уже читал это где-то? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Плюсую, но слишком много буквы!`,
    articleId: 1,
    userId: 2,
  },
  {
    text: `Это где ж такие красоты?`,
    articleId: 1,
    userId: 1,
  },
  {
    text: `Согласен с автором! Планируете записать видосик на эту тему?`,
    articleId: 2,
    userId: 2,
  },
  {
    text: `Давно не пользуюсь стационарными компьютерами. Ноутбуки победили. Мне кажется или я уже читал это где-то? Плюсую, но слишком много буквы!`,
    articleId: 3,
    userId: 1,
  },
  {
    text: `Это где ж такие красоты? Давно не пользуюсь стационарными компьютерами. Ноутбуки победили.`,
    articleId: 3,
    userId: 2,
  },
  {
    text: `Хочу такую же футболку :-)`,
    articleId: 3,
    userId: 1,
  }
];
