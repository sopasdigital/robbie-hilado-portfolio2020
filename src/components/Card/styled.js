import styled from "styled-components"

const CardWrapper = styled.div`
  display: flex;
  margin-bottom: 80px;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const CardBarWrapper = styled.div`
  width: 30%;
  padding-right: 50px;
  margin-top: 20px;
`

const CardBarWrapperToggleA = styled(CardBarWrapper)`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`

const CardBarWrapperToggleB = styled(CardBarWrapper)`
  display: none;

  @media only screen and (max-width: 600px) {
    display: block;
    width: 100%;
    margin-bottom: 30px;

    h4 {
      font-size: 20px;
      margin-bottom: 10px;
    }

    p {
      margin-bottom: 0.3rem;
      font-size: 0.9rem;
    }
  }
`

const CardContentWrapper = styled.div`
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`

export {
  CardWrapper,
  CardBarWrapper,
  CardBarWrapperToggleA,
  CardBarWrapperToggleB,
  CardContentWrapper,
}
