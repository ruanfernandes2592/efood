import HeaderSecondary from '../../../components/HeaderSecondary'
import type Food from '../../../models/Food'
import FoodList from '../../../components/FoodList'
import Banner from '../../../components/Banner'

import pizzaImg from '../../../assets/images/pizza.svg'
import BannerImg from '../../../assets/images/LaDolceVitaTrattoriaBanner.svg'

const AvailableFood: Food[] = [
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 1
  },
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 2
  },
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 3
  },
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 4
  },
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 5
  },
  {
    image: pizzaImg,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    id: 6
  }
]

const LaDolceVitaTrattoria = () => (
  <>
    <HeaderSecondary />
    <Banner
      bannerImg={BannerImg}
      category={'Italiana'}
      title={'La Dolce Vita Trattoria'}
    />
    <div className="container">
      <FoodList foods={AvailableFood} />
    </div>
  </>
)

export default LaDolceVitaTrattoria
