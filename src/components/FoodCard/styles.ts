import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 338px;
  background-color: ${cores.rosa};
  color: ${cores.branco};
  padding: 8px;
`
export const ImgFlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

export const Content = styled.div`
  border: 1px solid ${cores.rosa};
  border-top: none;
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  margin-top: 8px;
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px 0;
  height: 88px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.branco};
  color: ${cores.rosa};
  font-size: 14px;
  font-weight: bold;
  padding: 4px;
  display: inline-block;
  text-decoration: none;
  width: 100%;
  text-align: center;
`
