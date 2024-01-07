import { getPokemonById } from './js-foundation/06-promises';
import { buildLogger } from './plugins';
//const { getUUID, getAge } = require('./plugins');
//const { emailTemplate } = require('./js-foundation/01-template');
//console.log(emailTemplate);
//require('./js-foundation/02-destructuring');
//const { getUserById } = require('./js-foundation/03-callbacks');
/*
const { getUserById } = require('./js-foundation/04-arrows');
const id = 1;
getUserById(id, function (error, user) {
  if (error) {
    throw new Error(error);
    return;
  }
  console.log({ user: user });
});
*/

//!SECTION referencia a funcion factory
/* const { buildMakePerson } = require('./js-foundation/05-factory');
const makePerson = buildMakePerson({ getUUID, getAge });
const obj = { name: 'John', birthdate: '1983-05-03' };
const john = makePerson(obj);
console.log({ john });
 */

/* const { getPokemonById } = require('./js-foundation/06-promises');

*/
getPokemonById(12)
  .then((pokemon) => console.log({ pokemon }))
  .catch((err) => console.log(err.Error))
  .finally(() => console.log('finalizado'));

/* const logger = buildLogger('app.ts');
logger.log('hola mundo');
logger.error('evento critico');
 */
