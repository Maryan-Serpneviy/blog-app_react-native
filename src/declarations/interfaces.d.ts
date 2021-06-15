declare interface IScreen {
   [key: ScreenEnum]: Component | FC
}

declare interface IPost {
   id: number
   img: string
   text: string
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