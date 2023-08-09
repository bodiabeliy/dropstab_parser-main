const db = require('mongoose')
db.set("strictQuery", false);

main().catch(err => console.log(err))

async function main(){
    await db.connect('mongodb+srv://bordan2604:dEEnQChfWErOzo9L@alex12012023.nhkqchh.mongodb.net/')
}

main();
    
module.exports = db;
