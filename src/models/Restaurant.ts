class Restaurant {
  title: string
  score: number
  category: string[]
  description: string
  image: string
  to: string
  id: number

  constructor(
    title: string,
    score: number,
    category: string[],
    description: string,
    image: string,
    to: string,
    id: number
  ) {
    this.title = title
    this.score = score
    this.category = category
    this.description = description
    this.image = image
    this.to = to
    this.id = id
  }
}

export default Restaurant
