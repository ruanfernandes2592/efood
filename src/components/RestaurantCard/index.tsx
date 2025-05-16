import Tag from '../Tag'

import {
  ButtonLink,
  Card,
  Descricao,
  Infos,
  Titulo,
  Content,
  FlexCenter,
  Score
} from './styles'

type Props = {
  title: string
  score: number
  category: string[]
  description: string
  image: string
  to: string
}

import starIcon from '../../assets/images/star.svg'

const RestaurantCard = ({
  title,
  score,
  category,
  description,
  image,
  to
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Content>
      <FlexCenter>
        <Titulo>{title}</Titulo>
        <Score>
          <span>{score}</span>
          <img src={starIcon}></img>
        </Score>
      </FlexCenter>
      <Infos>
        {category.map((c) => (
          <Tag key={c}>{c}</Tag>
        ))}
      </Infos>
      <Descricao>{description}</Descricao>
      <ButtonLink to={to}>Saiba mais</ButtonLink>
    </Content>
  </Card>
)

export default RestaurantCard
