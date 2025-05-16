import logo from '../../assets/images/logo.svg'
import { HeaderMain, Logo } from './styles'

const Header = () => {
  return (
    <HeaderMain>
      <div className="container">
        <Logo src={logo} alt="" />
        <h1>Viva experiências gastronômicas no conforto da sua casa</h1>
      </div>
    </HeaderMain>
  )
}

export default Header
