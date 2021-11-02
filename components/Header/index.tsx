import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';
import { GiFeather } from 'react-icons/gi';

const Header: React.FC = () => {
	return (
		<Container>
			<div style={{ position: 'relative' }}>
				<FeatherIcon size="4em" />
				<h1>
					may<span>be</span>writing...
				</h1>
			</div>
			<SubTitle> - street writing -</SubTitle>
			<Nav />
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
