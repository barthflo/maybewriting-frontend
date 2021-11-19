import React, { useState, useEffect } from 'react';
import Tab from '../Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from '../../styles/theme';
import { useGlobal } from '../../pages/_app';
import { IMenuItem } from '../../@types/settings.types'


const Nav: React.FC<{ open: boolean, setOpen: () => void }> = ({ open, setOpen }) => {
	const { asPath } = useRouter();
	const theme = useTheme();
	const { menu: { menu_item } } = useGlobal()

	const setActiveItem = (item: IMenuItem): boolean => {
		if (asPath.includes(item.name) || asPath === item.path) {
			return (item.active = true);
		}
		return (item.active = false);
	};

	return (
		<NavContainer open={open}>
			<NavBar borderBottom={'20px solid'}>
				{menu_item.map((item, index) => {
					setActiveItem(item);
					return (
						<Tab
							as="li"
							key={index}
							background={!item.active && theme.palette.dark.secondary}
							color={!item.active ? theme.palette.light.primary : undefined}
							index={(menu_item.length - index).toString()}
							borderColor={
								item.active
									? theme.palette.dark.secondary
									: theme.palette.light.primary
							}
							active={item.active}
							hover={!item.active}
							width={'98%'}
							onClick={setOpen}
							grow
							menu
						>
							<Link href={item.path} passHref>
								<Label>{item.name}</Label>
							</Link>
						</Tab>
					);
				})}
			</NavBar>
		</NavContainer>
	);
};

const NavContainer = styled.nav<{ open: boolean }>`
	position: fixed;
	top: 100px;
	right: ${(props) => (props.open ? '0' : '-250px')};
	transition: 0.5s ease-in-out;
	width: 170px;
	height: calc(100vh - 100px);
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background : ${props => props.theme.palette.light.primary};
	@media (min-width: ${props => props.theme.breakpoints.sm}){
		height: calc(100vh - 110px);
		top:110px;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		overflow: unset;
		height: unset;
		padding: 0;
		position: initial;
		width: ${(props) => props.theme.breakpoints.md};
		background: transparent;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.lg}) {
		width: ${(props) => props.theme.breakpoints.lg};
	}
	@media (min-width: ${(props) => props.theme.breakpoints.xlg}) {
		width: ${(props) => props.theme.breakpoints.xlg};
	}
`;
const Logo = styled.img`
	margin-top: 40px;
	width: 40px;
	height: 40px;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
	}
`;

const NavBar = styled.ul<{ borderBottom: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 100%;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		flex-direction: row;
		border-bottom: ${(props) => props.borderBottom};
		margin-bottom: unset;
		height: unset;
	} ;
`;

const Label = styled.a`
	width: 100%;
	height: 100%;
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

// const DropDown = styled(NavBar)<{opacity ?: string}>`
//     opacity : ${props => props.opacity};
//     transition: 0.5s ease-in;
//     background: #F2EFE2;
//     position: absolute;
//     top: 40px;
//     width: 100%;
// `

export default Nav;
