import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  position: relative;
  width: 472px;
`
export const Content = styled.div`
  border: 1px solid ${cores.rosa};
  padding: 8px;
  margin-top: -4px;
  border-top: none;
`
export const FlexCenter = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 18px;
`
export const Score = styled(Titulo)`
  img {
    margin-left: 8px;
  }
`

export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.rosa};
  color: ${cores.branco};
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  display: inline-block;
  text-decoration: none;
`
