import { DATA } from './data'

class DataService {
   posts: IPost[] = DATA
}

export const dataService = new DataService()