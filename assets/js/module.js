const productdb = (dbname,table) => {
    //create database
    
    const db = new Dexie(dbname)
    db.version(1).stores(table);
    db.open();

    /* const db = new Dexie("geez_database");
  
    db.version(1).stores({
        letters: `letter1 , letter2`
    }); */

    return db;
}

//insert function
const bulkcreate = (dbtable,data)=> {
    dbtable.bulkAdd([data])
}

export default productdb;
export {bulkcreate};