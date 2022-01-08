import { DB } from '../services/db.service'

interface IBootstrapStatus {
   dbInitialized: boolean
}

export async function bootstrap(): Promise<IBootstrapStatus> {
   const bootstrapStatus: IBootstrapStatus = {
      dbInitialized: false
   }

   try {
      await DB.init()
      bootstrapStatus.dbInitialized = true
      console.log('DATABASE IS STARTED')
   } catch (error) {
      console.error(error)
      bootstrapStatus.dbInitialized = false
   }

   return bootstrapStatus
}