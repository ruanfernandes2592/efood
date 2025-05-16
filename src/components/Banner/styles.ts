import styled from 'styled-components'

export const BannerRest = styled.div`
  background-color: red;
  background-size: cover;
  width: 100%;
  height: 280px;
  color: #fff;
  font-size: 32px;
  padding: 24px 0 32px 0;

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  span {
    font-weight: 100;
  }

  h1 {
    font-weight: 900;
  }
`
