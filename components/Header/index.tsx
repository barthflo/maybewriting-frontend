import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { GiFeather } from 'react-icons/gi';

const Header: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false)

	return (
		<Container>
			<div style={{ position: 'relative' }}>
				<FeatherIcon size="4em" />
				<h1>
					may<span>be</span>writing...
				</h1>
			</div>
			<SubTitle> - street writing -</SubTitle>
			<BurgerContainer onClick={() => setOpen(!open)}>
				<BurgerIcon open={open} />
			</BurgerContainer>
			<Nav open={open} />
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
	padding: 20px;
	line-height: 35px;
	& h1 {
		margin: 0;
		font-family: ${(props) => props.theme.text.siteTitle};
		font-weight: 400;
		font-size: 40px;
		& > span {
			color: #de0606;
		}
	}
	z-index: 1000;
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		align-items: center;
		& h1 {
			font-size: 45px;
		}
	}
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		height: 178px;
		align-items: center;
		justify-content: space-evenly;
		line-height: unset;
		padding-bottom: 0;
		& h1 {
			font-size: 45px;
		}
	}
`;
const FeatherIcon = styled(GiFeather)`
	fill: ${(props) => props.theme.palette.light.primary};
	position: absolute;
	top: -19px;
	right: -25px;
	width: 2em;
	@media (min-width: ${(props) => props.theme.breakpoints.sm}) {
		width: 3em;
		top: -25px;
		right: -38px;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		width: 3.5em;
		top: -15px;
		right: -45px;
	}
`;

const SubTitle = styled.span`
	font-family: ${(props) => props.theme.text.siteSubtitle};
	margin-bottom: 6px;
`;

const BurgerContainer = styled.div`
	position: fixed;
	top: 40px;
	right: 20px;
	cursor: pointer;
	height: 25px;
	z-index: 1;
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
