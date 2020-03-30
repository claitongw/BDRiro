const express = require ('express'); 
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
//nodemon para n precisar ficar reinicando o projetonpn
/**
 * Tipos de parametros:
 * 
 * Query Params: parametros nomeados enviados na rota após o ? (filtros, paginação)
 * Route Params: utilizado para identificar recursos
 * Rquest Body: corpo da requisição, utilizado para alterar ou criar recursos.
 */

/**app.get('/users', (request, response) =>{
 *const params = request.query; - Acessamos todos os parametros enviados pela url
*/

// app.get('/users/:id', (request, response) =>{
//  const params = request.params; - //assim já esperamos um valor id, que sera enviado na url. EX: /users/1

// npm install cors  --> modulo de segurança para determinar quem podera acessar a aplicação.