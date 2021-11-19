import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { useGlobal } from '../../pages/_app'

const Header: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)
	const { site_title, site_subtitle, logo } = useGlobal()
	return (
		<Container>
			<div style={{ position: 'relative', display: 'flex', alignItems: 'baseline' }}>
				<Title>
					{site_title.substring(0, 3)}<span>{site_title.substring(3, 5)}</span>{site_title.substring(5)}
				</Title>
				<Logo src={logo.formats ? logo.formats.thumbnail.url : logo.url} alt={logo.alternativeText} />
			</div>
			<SubTitle>{site_subtitle}</SubTitle>
			<BurgerContainer onClick={() => setOpen(!open)} aria-label="menu">
				<BurgerIcon open={open} />
			</BurgerContainer>
			<Nav open={open} setOpen={() => setOpen(false)} />
		</Container>
	);
};

export default Header;

const Container = styled.header`
	width: 100vw;
	height: 100px;
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: start;
	background: #34312e;
	color: #f2efe2;
	padding: 20px 15px 0;
	z-index: 1000;
	line-height: 33px;
	box-shadow: ${props => props.theme.shadows.soft.bottom};
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		height: 110px;
		align-items: center;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		height: auto;
		justify-content: space-evenly;
		line-height: unset;
		padding-bottom: 0;
		box-shadow: none;
	}
`;

const Title = styled.span`
	margin: 0;
	font-family: ${(props) => props.theme.text.siteTitle};
	font-weight: 400;
	font-size: 35px;
	& > span {
		color: #de0606;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		font-size: 40px;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		font-size: 45px;
	}
`

const Logo = styled.img`
	position: relative;
	left: -5px;
	fill: ${(props) => props.theme.palette.light.primary};
	width: 2em;
	object-fit: fill;
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		width: 2.5em;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		width: 3.3em;
	}
`;

const SubTitle = styled.span`
	font-family: ${(props) => props.theme.text.siteSubtitle};
	margin-bottom: 6px;
`;

const BurgerContainer = styled.button`
	position: fixed;
	top: 30px;
	right: 10px;
	cursor: pointer;
	height: 25px;
	z-index: 1;
	background: none;
	border: none;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
	}
`;
const BurgerIcon = styled.span<{ open: boolean }>`
	height: 2px;
	width: ${(props) => (props.open ? '20px' : '25px')};
	background: ${(props) => props.theme.palette.light.primary};
	display: block;
	transform: ${(props) =>
		props.open ? 'translateY(4px) rotateZ(45deg)' : 'rotateZ(0deg)'};
	transition: 0.4s ease-in-out;
	&:before {
		content: '';
		display: block;
		height: 2px;
		width: ${(props) => (props.open ? '20px' : '25px')};
		position: relative;
		top: 6px;
		background: ${(props) => props.theme.palette.light.primary};
		opacity: ${(props) => (props.open ? '0' : '1')};
		transition: 0.4s ease-in-out;
	}
	&:after {
		content: '';
		display: block;
		height: 2px;
		width: ${(props) => (props.open ? '20px' : '25px')};
		position: relative;
		top: 11px;
		background: ${(props) => props.theme.palette.light.primary};
		transform: ${(props) =>
		props.open ? 'translateY(-13px) rotateZ(90deg)' : 'rotateZ(0deg)'};
		transition: 0.4s ease-in-out;
	}
`;
