'use strict';

// Напиши скрипт имитирующий авторизацию администратора в панели управления.

// Есть переменная message в которую будет записано сообщение о результате. При загрузке страницы у посетителя запрашивается пароль через prompt:

// Если нажали Cancel, записать в message строку 'Отменено пользователем!'
// В протовном случае, если введен пароль который совпадает со значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!'
// В противном случае, то есть если ни одно из предыдущих условий не выполнилось, записать в message строку 'Доступ запрещен, неверный пароль!'
// После всех проверок вывести в alert значение переменной message.

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Please sign in');

if (message === null) {
    message = 'Отменено пользователем!';
    console.log(`${message}`);
  } else if (message === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    alert (`${message}`);
    console.log(`${message}`);
  } else {
    message = 'Доступ запрещен, неверный пароль!';
    console.log(`${message}`);
    alert (`${message}`);
  };
