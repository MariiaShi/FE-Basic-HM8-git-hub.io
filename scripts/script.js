
// Написать цикл, который создает множество параграфов с каждым десятым числом в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
//  Добавить созданные параграфы в div с классом numbers.
const myDiv = document.createElement('div');
myDiv.classList.add('numbers');

for (let i = 100; i >= 50; i-=10) {
    const paragraph = document.createElement('p');
    paragraph.textContent = i; 
    myDiv.appendChild(paragraph);
}

document.body.appendChild(myDiv);

// Написать цикл, который проходится по массиву строк, для каждой строки создает параграф и добавляет его в div с классом strings_container.
//  Строки взять произвольные.

const strings = ['string1', 'string2', 'string3'];
const myDiv2 = document.createElement('div');
myDiv2.classList.add('strings_container');

for (let index = 0; index < strings.length; index++) {
    const paragraph = document.createElement('p');
    paragraph.textContent = strings[index]; 
    myDiv2.appendChild(paragraph);
}

document.body.appendChild(myDiv2);

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, last_name и  age (данные взять произвольные) - и создает карточки только для совершеннолетних пользователей. Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.

const person = [
    {first_name:'John',  last_name:'Ivanov', age:20},
    {first_name:'Nike',  last_name:'Ivanov', age:17},
    {first_name:'Mike',  last_name:'Ivanov', age:18}
];
const myDiv3 = document.createElement('div');
myDiv3.classList.add('users_container');
console.log("Начало цикла");
for (let i = 0; i < person.length; i++) {
    if(person[i].age >= 18) {
        const card = document.createElement('div');
        card.classList.add('card');
        const paragraph1 = document.createElement('p');
        paragraph1.textContent = person[i].first_name;
        card.appendChild(paragraph1);
        const paragraph2 = document.createElement('p');
        paragraph2.textContent = person[i].last_name;
        card.appendChild(paragraph2);
        const paragraph3 = document.createElement('p');
        paragraph3.textContent = person[i].age;
        card.appendChild(paragraph3);

        myDiv3.appendChild(card);
    }
}

document.body.appendChild(myDiv3);
