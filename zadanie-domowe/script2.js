// 3. Obsługa błędów
// Nieprawidłowy JSON (klucze nie są zapisane w cudzysłowie)
const invalidJSON = '{ name: "Mango", age:3, isHappy: true }';
//próba parsowania błędnego JSON
try {
  const obiekt = JSON.parse(invalidJSON);
  console.log('Parsowanie zakończone sukcesem:', obiekt);
} catch (error) {
  console.log('Wystąpił błąd podczas parsowania JSON:');
  console.log('Rodzaj błedu:', error.name);
  console.log('Wiadomość błędu:', error.message);
}
