import styled from "styled-components"

const ContentBox = styled.div`
  flex: 3;
  padding-right: 30px;
  max-height: 100vh;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    margin-bottom: 50px;
    max-height: none;
  }
`

export { ContentBox }
