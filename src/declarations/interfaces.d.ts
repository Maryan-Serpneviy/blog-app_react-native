declare interface IScreen {
   [key: ScreenEnum]: Component | FC
}

declare interface IPost {
   id: number
   text: string
   image: string
   date: string
   booked: boolean
}

declare interface IImagePickerResult {
   type: string
   uri: string
   cancelled: boolean
   width: number
   height: number
}