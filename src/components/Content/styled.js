import styled from "styled-components"

const ContentBox = styled.div`
  flex: 3;
  padding-right: 30px;
  max-height: 85vh;
  overflow: auto;

  @media only screen and (max-width: 600px) {
    margin-bottom: 100px;
    max-height: none;
    padding-right: 0;

    .typedText {
      height: 300px;
    }
  }
`

export { ContentBox }
