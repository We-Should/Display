import {  NavLink, NavLinkProps } from "react-router-dom";
import styled from "styled-components";


interface Props {
    items: NavLinkProps[]
}

export const Menu: React.FC<Props> = (props) => {
    if (!props.items) {
        return null;
    }
  
    return (
      <StyledMenu>
        {props.items.map((item, index) => (
            <StyledNavLink {...item} key={index}/>
        ))}
      </StyledMenu>
    );
  };

const StyledNavLink = styled(NavLink)`
  color: var(--menu-link-color);
  opacity: 1;
  transition: color .3s ease-in-out;
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  font-size: 1rem;
  padding-left: var(--padding-small);
  padding-right: var(--padding-small);
  padding-bottom: var(--padding-medium);
  position: relative;

  &.active {
    color: var(--link-color-active);

    &::before {
        width: 100%;
        opacity: 1;
        border-bottom: 2px solid var(--link-color-active);
    }
  }

  &:hover:not(&.active) {
    color: var(--text-color);

    &::before {
        opacity: .5;
        width: 35%;
        border-bottom: 2px solid var(--menu-link-color);
    }
  }

  &::before {
    content: "";
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    opacity: 0;
    transition: width .3s ease-in-out, opacity .3s ease-in-out;
  }
`;

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

