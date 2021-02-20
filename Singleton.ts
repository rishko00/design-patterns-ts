class Database {
  private static db: Database;

  private constructor() {
    this._host = "localhost";
    this.port = 3306;
    this.username = "root";
    this.password = "welcome123@";
    this.database = "test";
  }

  private static getDB(): Database {
    if (!Database.db) {
      Database.db = new Database();
    }
    return Database.db;
  }
}

let db1 = Database.getDB();
let db2 = Database.getDB();

console.log(db1 === db2);
