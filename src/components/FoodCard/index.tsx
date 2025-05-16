import {
  ButtonLink,
  Card,
  Content,
  Descricao,
  Titulo,
  ImgFlexCenter
} from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const FoodCard = ({ image, title, description }: Props) => (
  <Card>
    <ImgFlexCenter>
      <img src={image} alt={title} />
    </ImgFlexCenter>
    <Content>
      <Titulo>{title}</Titulo>
      <Descricao>{description}</Descricao>
      <ButtonLink to={'/'}>Adicionar ao carrinho</ButtonLink>
    </Content>
  </Card>
)

export default FoodCard
