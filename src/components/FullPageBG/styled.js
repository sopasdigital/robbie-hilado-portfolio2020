import styled from "styled-components"

const BGContainer = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const BGText = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 20rem;
  position: absolute;
  bottom: 4rem;
  left: 0;
  color: #eee;
`

export { BGContainer, BGText }
