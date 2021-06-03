import { configure, makeAutoObservable } from 'mobx'
import { dataService } from '../services/data.service'

configure({ enforceActions: 'observed' })
export class PostsStore {
   constructor() {
      makeAutoObservable(this)
   }

   allPosts: IPost[] = []
   favPosts: IPost[] = []

   loadPosts = (posts: IPost[] = dataService.posts) => {
      this.allPosts = posts
      this.favPosts = posts.filter(post => post.booked)
   }

   toggleFavorite = (postId?: number) => {
      this.allPosts = this.allPosts.map(post => {
         if (post.id === postId) {
            post.booked = !post.booked
         }
         return post
      })
      this.favPosts = this.allPosts.filter(post => post.booked)
   }

   deletePost = (postId?: number) => {
      this.allPosts = this.allPosts.filter(post => post.id !== postId)
      this.favPosts = this.favPosts.filter(post => post.id !== postId)
   }
}

export const postsStore = new PostsStore()