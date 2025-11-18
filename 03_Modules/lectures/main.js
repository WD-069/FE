import { saveToLocalStorage as save, user } from './modules/storage.js';
import './modules/db.js';
import fetchSomething from './modules/api.js';
console.log('hello world');

// localstorage
// fetch
// ui
//
//
// throw new Error();

console.log(user);
save();
await fetchSomething();
