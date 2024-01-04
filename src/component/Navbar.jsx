import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo_white.png";
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarContainer = styled.nav`
  background-color: ${({ transparent }) =>
    transparent ? "rgba(51, 51, 51, 0)" : "rgba(51, 51, 51, 1)"};
  padding: 10px 0;
  position: ${({ scrolling, transparent }) =>
    scrolling || !transparent ? "fixed" : "absolute"};
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out, position 0.3s ease-in-out;

  @media (max-width: 768px) {
    background-color: ${({ scrolling, transparent }) =>
      scrolling || !transparent
        ? "rgba(51, 51, 51, 1)"
        : "rgba(51, 51, 51, 0.5)"};
  }
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: row-reverse;
    padding: 00px 20px;
  }
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.5em;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    margin-top: 5px;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(51, 51, 51, 1);
    position: absolute;
    top: 65px;
    right: 0;
    z-index: 1;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    transition: opacity 1.3s ease-in-out, transform 1s ease-in-out;
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(-100%)"};
  }
`;

const NavLink = styled.li`
  position: relative;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: white;
  position: relative;
  padding: 10px;
  transition: color 0.3s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    color: white;
  }

  &:hover::before {
    transform-origin: bottom left;
    transform: scaleX(1);
  }
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${({ transparent }) =>
    transparent ? "rgba(51, 51, 51, 0.2)" : "#333"};
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 8px;
  overflow: hidden;
`;

const DropdownLink = styled(StyledLink)`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out;
  border-bottom: 1px solid #555;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    border-bottom: none;
    background-color: rgba(51, 51, 51, 0.2);
  }
`;

const Dropdown = styled(NavLink)`
  &:hover ${DropdownContent} {
    display: block;
  }
`;

const MenuButton = styled.div`
  display: none;

  @media (max-width: 768px) {
    color: white;
    display: block;
    cursor: pointer;
    order: -1;
  }
`;

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [transparent, setTransparent] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      if ((atTop && scrolled) || (!atTop && !scrolled)) {
        setAtTop(!scrolled);
        setTransparent(!scrolled);
        setScrolling(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [atTop]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavbarContainer
        className={scrolling ? "scrolling" : ""}
        scrolling={scrolling}
        transparent={transparent}
      >
        <NavbarContent>
          <Logo>
            <img style={{ width: "90px" }} src={logo} alt="logo" />
          </Logo>
          <MenuButton onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </MenuButton>
          <NavLinks isOpen={isOpen}>
            <NavLink>
              <StyledLink href="/">Home</StyledLink>
            </NavLink>

            <Dropdown transparent={transparent}>
              <Link to="about" smooth duration={500}>
                <StyledLink href="about">About</StyledLink>
              </Link>
              <DropdownContent transparent={transparent}>
                <DropdownLink href="/company">Company</DropdownLink>
                <DropdownLink href="/keyperson">Key Persons</DropdownLink>
              </DropdownContent>
            </Dropdown>
            <NavLink>
              <StyledLink href="/gallary">Gallary</StyledLink>
            </NavLink>
            <Dropdown transparent={transparent} isOpen={isOpen}>
              <StyledLink href="/Products">Products</StyledLink>
              <DropdownContent transparent={transparent}>
                <DropdownLink href="#service1">Food products</DropdownLink>
                <DropdownLink href="#service2">Handicraft</DropdownLink>
              </DropdownContent>
            </Dropdown>

            <NavLink>
              <StyledLink href="/contact">Contact</StyledLink>
            </NavLink>
          </NavLinks>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
