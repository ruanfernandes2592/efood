import type Restaurant from '../../models/Restaurant'
import RestaurantCard from '../RestaurantCard'
import { Container, List } from './styles'

export type Props = {
  restaurants: Restaurant[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <Container>
    <List>
      {restaurants.map((r) => (
        <RestaurantCard
          key={r.id}
          title={r.title}
          score={r.score}
          category={r.category}
          description={r.description}
          image={r.image}
          to={r.to}
        />
      ))}
    </List>
  </Container>
)

export default RestaurantsList
