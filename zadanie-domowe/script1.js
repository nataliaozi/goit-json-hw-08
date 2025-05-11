//2. Analiza metody JSON.parse()
//Kopiuję ciąg JSON
const json = '{"name":"Mango","age":3,"isHappy":true}';

//Konwersja JSON na obiekt JavaScript za pomoca metody JSON.parse()
const obj = JSON.parse(json);

//Wydrukowanie obiektu w konsoli
console.log(obj);

//Weryfikacja poprzez odwołanie się do poszczególnych właściwości obiketu (obj).
// Zostanie zastosowany tu operator kropki .
// -pozwalający uzyskać dostęp do wartości przechowywanych w obiekcie
console.log('Imię:', obj.name); // w konsoli powinno być: Mango
console.log('Wiek:', obj.age); // w konsoli powinno być: 3
console.log('Czy jest szczesliwy?:', obj.isHappy); // w konsoli powinno byc : true
