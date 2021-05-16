import { configure, makeAutoObservable } from 'mobx'

configure({ enforceActions: 'observed' })
export class MainStore {
   constructor() {
      makeAutoObservable(this)
   }

}

export const mainStore = new MainStore()