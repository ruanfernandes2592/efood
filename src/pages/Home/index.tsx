import Header from '../../components/Header'
import RestaurantsList from '../../components/RestaurantsList'
import type Restaurant from '../../models/Restaurant'

import sushiImg from '../../assets/images/sushi.svg'
import massaImg from '../../assets/images/massa.svg'

const Available: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    score: 4.9,
    category: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushiImg,
    to: '/HiokiSushi',
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massaImg,
    to: '/LaDolceVitaTrattoria',
    id: 2
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massaImg,
    to: '/LaDolceVitaTrattoria',
    id: 3
  },
  {
    title: 'Hioki Sushi',
    score: 4.9,
    category: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushiImg,
    to: '/HiokiSushi',
    id: 4
  },
  {
    title: 'Hioki Sushi',
    score: 4.9,
    category: ['Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    image: sushiImg,
    to: '/HiokiSushi',
    id: 5
  },
  {
    title: 'La Dolce Vita Trattoria',
    score: 4.6,
    category: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: massaImg,
    to: '/LaDolceVitaTrattoria',
    id: 6
  }
]

const Home = () => (
  <>
    <Header />
    <div className="container">
      <RestaurantsList restaurants={Available} />
    </div>
  </>
)

export default Home
