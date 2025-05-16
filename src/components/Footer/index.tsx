import { Container, Redes } from './styles'
import logo from '../../assets/images/logo.svg'
import logoInsta from '../../assets/images/insta.png'
import logoFace from '../../assets/images/facebook.svg'
import logoTwitter from '../../assets/images/twitter.svg'

const Footer = () => (
  <Container>
    <div className="container">
      <div>
        <img src={logo} />
        <Redes>
          <li>
            <a href="#">
              <img src={logoInsta} alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoFace} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={logoTwitter} alt="Twitter" />
            </a>
          </li>
        </Redes>
      </div>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
