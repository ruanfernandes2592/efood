import type Food from '../../models/Food'
import FoodCard from '../FoodCard'
import { Container, List } from './styles'

export type Props = {
  foods: Food[]
}

const FoodList = ({ foods }: Props) => (
  <Container>
    <List>
      {foods.map((f) => (
        <FoodCard
          key={f.id}
          image={f.image}
          title={f.title}
          description={f.description}
        />
      ))}
    </List>
  </Container>
)

export default FoodList
