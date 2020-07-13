import styled from "styled-components"

const Logo = styled.div`
  max-width: 300px;
  margin: 0 auto 20px;
`

const Nav = styled.nav`
  width: 100%;
  padding-left: 30px;
  text-align: center;

  border-left: 1px solid ${({ theme }) => theme.colors.grey.light};

  @media only screen and (max-width: 600px) {
    border: none;
    padding: 50px;
  }
`

const NavDivider = styled.div`
  width: 40px;
  content: "";
  margin: 70px auto 30px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`

const MenuWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const SiteLinks = styled.ul`
  li {
    margin: 8px 0;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
    transition: none;
    font-weight: 500;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  justify-content: center;

  li {
    margin: 5px 10px;
    font-size: 1.563rem;
  }

  a {
    color: ${({ theme }) => theme.colors.black};

    transition: color 120ms ease-in;
  }
`

export { Logo, Nav, NavDivider, MenuWrapper, SiteLinks, SocialLinks }
