// database/index.js
import mysql from "mysql";

// cria conexão
const pool = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_matematica',
  waitForConnections: true,
  connectionLimit: 5, // limite de conexões. 0 para sem limite
  queueLimit: 5 // limite de filas de conexões. 0 para sem limite
  
});

// exporta para usar em outros arquivos
export default pool;