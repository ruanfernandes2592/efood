import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Logo, SecondaryHeader } from './styles'

const HeaderSecondary = () => (
  <SecondaryHeader>
    <div className="container">
      <Link to={'/'}>Restaurantes</Link>
      <Logo src={logo} alt="" />
      <div>0 produto(s) no carrinho</div>
    </div>
  </SecondaryHeader>
)

export default HeaderSecondary
