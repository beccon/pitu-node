import app from './app';
import database from './database';

//database.sync({force:true}); // força o create table

database.sync();
console.log('Database running at 3306');

app.listen(3000);

console.log('Server running at 3000');
