export interface IProduct {
    id?: number
    title: string
    price: number
    description: string
    category: string
    image: string
    rating: {
      rate: number
      count: number
    }
}

export interface INoteData {
  archive: boolean
  category: string
  content: string
  created: Date
  dates: string
  name: string
  picture: string
}

export interface INote {
  id: string,
  data: INoteData
}

export interface ICategoryData {
  id: string
  name: string
  picture: string
}

export interface ICategory {
  id: string
  data: ICategoryData
}