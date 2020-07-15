import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 80px;

  h2 {
    font-size: 28px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`

const CardWrapper = styled(Wrapper)`
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`

const CardWrapperReverse = styled(Wrapper)`
  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

const CardBarWrapper = styled.div`
  width: 30%;
  padding-right: 50px;
  margin-top: 20px;

  @media only screen and (max-width: 600px) {
    width: 100%;

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
  padding-right: 50px;

  @media only screen and (max-width: 600px) {
    width: 100%;
    padding-right: none;
  }
`

export {
  CardWrapper,
  CardBarWrapper,
  CardWrapperReverse,
  CardBarWrapperToggleA,
  CardBarWrapperToggleB,
  CardContentWrapper,
}
