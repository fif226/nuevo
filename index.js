/*//Servidor HTTP
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//MYSQL o MARIADB
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'classicmodels'
});

connection.connect();

connection.query('SELECT * FROM employees', function (error, results, fields) {
  if (error) throw error;
  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    let cadena = "";
    for (var i = 0; i < results.length; i++) {
      cadena += JSON.stringify(results[i]) + "\n";
    }
    //res.end(cadena);
    res.end(cadena);
    //res.end('Hello, World!\n');
  });

  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    //console.log(results);
  });

});
connection.end();
*/

const express = require('express')
const app = express()
app.use(express.urlencoded())
app.get('/', (req, res) => {
    res.send('' +
        '<form method="post">' +
          '<input type="text" placeholder="Nombre" name="nom">' +
          '<input type="text" placeholder="Apellido paterno" name="ap">' +
          '<input type="text" placeholder="Apellido materno" name="am">' +
          '<input type="submit" value="Aceptar">' +
        '</form>')
    console.log(req.query)
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send('Por post')
})
app.listen(3000, () => console.log('Server ready'))