import { configure, makeAutoObservable } from 'mobx'

import { DB } from '../services/db.service'
import { FS } from '../services/fs.service'

configure({ enforceActions: 'observed' })
export class PostsStore {
   constructor() {
      makeAutoObservable(this)
   }

   allPosts: IPost[] = []
   favPosts: IPost[] = []

   loadPosts = async () => {
      const posts = await DB.getPosts()
      this.allPosts = posts || []
      this.favPosts = posts?.filter(post => post.booked)
   }

   createPost = async (post: IPost) => {
      const fileName = post.image.split('/').pop()
      console.log('post image: ', post.image.split('/').pop())
      console.log('posts: ', this.allPosts)
      if (fileName) {
         const newPath = await FS.createFile(post.image, fileName)
         post.image = newPath
      }

      const insertId = await DB.createPost(post)
      if (insertId) post.id = insertId

      this.allPosts = [post, ...this.allPosts]
   }

   toggleFavorite = async (postId?: number) => { 
      this.allPosts = this.allPosts.map(post => {
         if (post.id === postId) {
            post.booked = !post.booked
         }
         return post
      })
      this.favPosts = this.allPosts.filter(post => post.booked)
   }

   deletePost = async (postId?: number) => {
      this.allPosts = this.allPosts.filter(post => post.id !== postId)
      this.favPosts = this.favPosts.filter(post => post.id !== postId)
   }
}

export const postsStore = new PostsStore()