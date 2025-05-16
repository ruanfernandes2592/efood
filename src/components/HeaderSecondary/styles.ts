import styled from 'styled-components'

import vetor from '../../assets/images/vetor2.svg'
import { cores } from '../../styles'

export const SecondaryHeader = styled.header`
  background-image: url(${vetor});
  height: 160px;
  font-size: 18px;
  font-weight: bolder;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;

    a {
      text-decoration: none;
      color: ${cores.rosa};
    }
  }
`
export const Logo = styled.img`
  width: 125px;
`
