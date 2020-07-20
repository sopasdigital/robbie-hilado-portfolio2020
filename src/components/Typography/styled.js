import styled from "styled-components"

const Display = styled.h1`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 54px;
  line-height: 54px;
  letter-spacing: 2px;
  margin: 30px 0 0;

  color: ${({ theme }) => theme.colors.black};
`

const CategoryHeading = styled.h6`
  position: relative;
  left: 40px;
  max-width: 200px;

  margin-bottom: 10px;

  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 16px;
  line-height: 18px;
  letter-spacing: 1px;

  color: #666;

  &:after {
    position: absolute;
    top: 50%;
    left: -50px;

    height: 1px;
    width: 40px;

    content: "";

    border-bottom: 1px solid #ddd;
    transform: translateY(-50%);
  }
`

const Title = styled.h4`
  padding-bottom: 3px;
  margin-bottom: 20px;

  font-family: ${({ theme }) => theme.fonts.serif};
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 1px;

  color: #666;
  border-bottom: 1px solid #ddd;
`

const Text = styled.p`
  line-height: 22px;
`

const ProjectTitle = styled.h2`
  margin-bottom: 0;
`

export { CategoryHeading, Display, Text, Title, ProjectTitle }
