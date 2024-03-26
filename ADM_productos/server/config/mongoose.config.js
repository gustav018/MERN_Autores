const mongoose = require("mongoose");
const db_name = "product_full_stack";

mongoose.connect(`mongodb://127.0.0.1/${db_name}`)
	.then(() => console.log(`Conexión exitosa ${db_name}`))
	.catch(err => console.log(`error en la conexión de base de datos ${db_name}`, err));
