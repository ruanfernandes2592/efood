import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  height: 298px;
  background-color: ${cores.rosaClaro};

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    text-align: center;
    padding: 40px 0 40px 0;
  }

  p {
    max-width: 480px;
    font-size: 10px;
    font-weight: 400;
    margin: 0 auto;
  }
`
export const Redes = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 32px;

  :nth-child(2) {
    margin: 0 8px;
  }
`
