// 3. Obsługa błędów
// Nieprawidłowy JSON (klucze nie są zapisane w cudzysłowie)
const invalidJSON = '{ name: "Mango", age:3, isHappy: true }';
//próba parsowania błędnego JSON
try {
  const obiekt = JSON.parse(invalidJSON);
  console.log('Parsowanie zakończone sukcesem:', obiekt);
} catch (error) {
  console.log('Wystąpił błąd podczas parsowania JSON:');
  console.error('Rodzaj błedu:', error.name);
  console.error('Wiadomość błędu:', error.message);
}

console.log(
  'Pomimo ze wystapil blad, kod dalej dziala, nie powoduje to jego zatrzymania'
); // polecenie z zadania domowego: Upewnij się , że skrypt działa poprawnie anwet w przypadku wystapienia bledu
