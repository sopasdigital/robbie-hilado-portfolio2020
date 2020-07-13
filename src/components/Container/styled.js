import styled from "styled-components"

const ContainerBox = styled.div`
  grid-column: 2 / 3;
  display: flex;
  align-items: center;
  min-height: 90vh;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

export { ContainerBox }
