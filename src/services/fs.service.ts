import * as FileSystem from 'expo-file-system'

export class FS {
   static async createFile(path: string, fileName: string): Promise<string> {
      const newPath = FileSystem.documentDirectory + fileName

      try {
         await FileSystem.moveAsync({
            from: path,
            to: newPath
         })
      } catch (error) {
         console.error(error)
      }

      return newPath
   }
}