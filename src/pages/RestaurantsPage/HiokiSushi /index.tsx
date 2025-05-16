import type Food from '../../../models/Food'
import HeaderSecondary from '../../../components/HeaderSecondary'
import FoodList from '../../../components/FoodList'

import sushi2 from '../../../assets/images/sushi2.jpeg'
import BannerImg from '../../../assets/images/sushi.svg'
import Banner from '../../../components/Banner'

const AvailableFood: Food[] = [
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O  Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 1
  },
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 2
  },
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 3
  },
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 4
  },
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 5
  },
  {
    image: sushi2,
    title: 'Sushi',
    description:
      'O Sushi é a combinação perfeita de sabor e elegância. Preparado com arroz temperado na medida certa, leva fatias frescas de salmão, atum e peixe branco.',
    id: 6
  }
]

const HiokiSushi = () => (
  <>
    <HeaderSecondary />
    <Banner bannerImg={BannerImg} category={'Japonesa'} title={'Hioki Sushi'} />
    <div className="container">
      <FoodList foods={AvailableFood} />
    </div>
  </>
)

export default HiokiSushi
