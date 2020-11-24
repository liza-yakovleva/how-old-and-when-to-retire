"use strict";
// TODO: Завдання 2.ver2. Написати функцію 1 calcAge() яка вираховує вік користувача(кількість років), у користувача потрібно запитати рік народження.Функція 2 yearsUntilRetirement(year, userName) в залежності від віку виводить інформацію коли користувач вийде на пенсію, але якщо вік користувача вже такий, то вивести повідомлення що користувач вже пенсіонер.Вихід на пенсію - 60 років.В консолі треба вивести повідомлення(Іван вийде на пенсію через 20 років, або Іван вже пенсіонер).
// *how old (from date of birth) and when to retire
let yearOfBirth = +prompt("Ведіть год народження(4 цифры) :", "2005");
let currentYear = +prompt("Ведіть текущий год(4 цифры) :", "2020");
let userName = prompt("Ведіть Ваше Имя :", "Иван");

function calcAgeUser(year, birth) {
  let ageUser = year - birth;
  console.log(`Ваш вік ${ageUser} років`);
  return ageUser;
}

function yearsUntilRetirement(yearBrth, name) {
  let a = yearBrth(currentYear, yearOfBirth);
  if (a < 60) {
    return console.log(`${name} вийде на пенсію через ${60 - a} років`);
  } else {
    return console.log(`${name} вже пенсіонер.`);
  }
}

yearsUntilRetirement(calcAgeUser, userName);