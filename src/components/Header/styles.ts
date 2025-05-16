import styled from 'styled-components'

import vetor from '../../assets/images/vetor.svg'

export const HeaderMain = styled.header`
  background-image: url(${vetor});
  height: 360px;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  h1 {
    font-size: 36px;
    max-width: 540px;
    text-align: center;
    margin-bottom: 40px;
  }
`
export const HeaderSecondary = styled.header`
  background-image: url(${vetor});
  height: 160px;
`

export const Logo = styled.img`
  width: 125px;
  margin-top: 40px;
`
