const dotenv = require('dotenv');

console.log(process.env.NODE_ENV === 'test' ? '.env.test' : '.env');
console.log('ANTES', process.env.DB_DIALECT);

dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

console.log('DEPOIS', process.env.DB_DIALECT);
console.log(process.env.NODE_ENV === 'test' ? '.env.test' : '.env');
