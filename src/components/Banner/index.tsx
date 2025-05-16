import { BannerRest } from './styles'

type Props = {
  bannerImg: string
  category: string
  title: string
}

const Banner = ({ bannerImg, category, title }: Props) => {
  return (
    <BannerRest style={{ backgroundImage: `url(${bannerImg})` }}>
      <div className="container">
        <span>{category}</span>
        <h1>{title}</h1>
      </div>
    </BannerRest>
  )
}

export default Banner
