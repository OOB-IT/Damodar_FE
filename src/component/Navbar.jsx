import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

const NavbarContainer = styled.nav`
  background-color: ${({ scrolling, transparent }) =>
    scrolling || !transparent ? "rgba(51, 51, 51, 0.8)" : "#333"};
  padding: 10px 0;
  position: ${({ scrolling, transparent }) =>
    scrolling || !transparent ? "fixed" : "absolute"};
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease-in-out, position 0.3s ease-in-out;

  @media (max-width: 768px) {
    background-color: ${({ scrolling, transparent }) =>
      scrolling || !transparent
        ? "rgba(51, 51, 51, 0.8)"
        : "rgba(51, 51, 51, 0.5)"};
    // Adjust the rgba value to control the transparency level for mobile view
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
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;
    background-color: rgba(51, 51, 51, 0.5);
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
  background-color: #333;
  min-width: 160px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownLink = styled(StyledLink)`
  display: block;
  padding: 12px 16px;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #555;
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
  const [transparent, setTransparent] = useState(true); // Set initial state to true
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;

      if (scrolled !== scrolling) {
        setScrolling(scrolled);
        setTransparent(false); // Change to false when scrolling starts
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

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
              <Link to="about" smooth duration={500}>
                <StyledLink>About</StyledLink>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="gallary" smooth duration={500}>
                <StyledLink>Certificates & Landscape</StyledLink>
              </Link>
            </NavLink>
            <Dropdown>
              <StyledLink href="#Products">Products</StyledLink>
              {/* <DropdownContent>
                <DropdownLink href="#service1">Service 1</DropdownLink>
                <DropdownLink href="#service2">Service 2</DropdownLink>
                <DropdownLink href="#service3">Service 3</DropdownLink>
                <DropdownLink href="#service4">Service 4</DropdownLink>
              </DropdownContent> */}
            </Dropdown>
            <NavLink>
              <Link to="feedback" smooth duration={500}>
                <StyledLink href="#feedback">Feedback</StyledLink>
              </Link>
            </NavLink>
            <NavLink>
              <Link to="contact" smooth duration={500}>
                <StyledLink href="#contact">Contact</StyledLink>
              </Link>
            </NavLink>
          </NavLinks>
        </NavbarContent>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
