import * as SQLite from 'expo-sqlite'

export class DB {
   protected static readonly db = SQLite.openDatabase('posts.db')

   static async init() {
      this.db.transaction(tx => {
         tx.executeSql(
            'CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY NOT NULL, text TEXT NOT NULL, image TEXT, date TEXT, booked INT)',
            [],
            (_, result) => result,
            (_, error) => {
               console.error(error)
               return Boolean(error)
            }
         )
      })
   }

   static async getPosts(): Promise<IPost[]> {
      this.db.transaction(tx => {
         tx.executeSql(
            'SELECT * FROM posts',
            [],
            (_, result) => result.rows['_array'],
            (_, error) => {
               console.error(error)
               return Boolean(error)
            }
         )
      })
      return []
   }

   static async createPost({ text, image, date, booked }: IPost): Promise<number | null> {
      this.db.transaction(tx => {
         tx.executeSql(
            `INSERT INTO posts (text, image, date, booked) VALUES (?, ?, ?, ?)`,
            [text, image, date, booked],
            (_, result) => result.insertId,
            (_, error) => {
               console.error(error)
               return Boolean(error)
            }
         )
      })
      return null
   }
}