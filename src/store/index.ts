import { configure } from 'mobx'
import { PostsStore } from './posts.store'

configure({ enforceActions: 'observed' })
export class RootStore {
   posts = new PostsStore()
}

export const rootStore = new RootStore()