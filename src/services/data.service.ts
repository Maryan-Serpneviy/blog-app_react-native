import { DATA } from './data'

class DataService {
   posts: iPost[] = DATA
}

export const dataService = new DataService()