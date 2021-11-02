import React, { useState, useEffect } from 'react';
import Tab from '../Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from '../../styles/theme';
import { GiFeather } from 'react-icons/gi';

type MenuItem = {
	name: string;
	path?: string;
	submenu?: {
		name: string;
		path: string;
		active?: boolean;
	}[];
	active?: boolean;
};

const menu: MenuItem[] = [
	{
		name: 'home',
		path: '/',
	},
	{
		name: 'what i write',
		path: '/what-i-write',
	},
	{
		name: 'litterature',
		path: '/litterature',
	},
	{
		name: 'music',
		path: '/music',
	},
	{
		name: 'movies',
		path: '/movies',
	},
	{
		name: 'miscellaneous',
		path: '/miscellaneous',
	},
	{
		name: 'a space for you',
		path: '/a-space-for-you',
	},
	{
		name: 'about',
		path: '/about',
	},
];

const Nav: React.FC = () => {
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);
	const { asPath } = useRouter();
	const theme = useTheme();

	const setActiveItem = (item: MenuItem): boolean => {
		if (asPath.includes(item.name) || asPath === item.path) {
			return (item.active = true);
		}
		return (item.active = false);
	};

	useEffect(() => {
		if (asPath.includes('critics')) {
			setShowDropDown(true);
		} else {
			setShowDropDown(false);
		}
	}, [setShowDropDown, asPath]);

	return (
		<NavContainer open={open}>
			<BurgerContainer onClick={() => setOpen(!open)}>
				<BurgerIcon open={open} />
			</BurgerContainer>
			<FeatherIcon color={theme.palette.light.primary} size="3em" />
			<NavBar borderBottom={!showDropDown && '20px solid'}>
				{menu.map((item, index) => {
					setActiveItem(item);
					return (
						<Tab
							as="li"
							key={index}
							background={!item.active && theme.palette.dark.secondary}
							color={!item.active ? theme.palette.light.primary : undefined}
							index={item.path ? (menu.length - index).toString() : '3'}
							borderColor={
								item.active
									? theme.palette.dark.secondary
									: theme.palette.light.primary
							}
							active={item.active}
							hover={!item.active}
							width="100%"
							// onMouseEnter={() => !item.path && setShowDropDown(true)}
							// onClick={() => !item.path && setShowDropDown(!showDropDown)}
							grow
						>
							{/* {item.path ? */}
							<Link href={item.path} passHref>
								<Label>{item.name}</Label>
							</Link>
						</Tab>
					);
				})}
			</NavBar>

			{/* :
                            <>
                                <Label href="#">
                                    {item.name}
                                </Label>
                                {item.submenu.length && showDropDown &&
                                    <DropDown
                                       borderBottom= {asPath.includes('critics') ? '20px solid #F2EFE2' : '5px solid #F2EFE2'}
                                       opacity = { showDropDown ? "1" : "0"}
                                       onMouseLeave={() => !asPath.includes('critics') && setShowDropDown(false)}
                                   >
                                       {item.submenu.map((item, index) => {
                                           setActiveItem(item)
                                           return(
                                               <Tab
                                                   as="li"
                                                   key={index}
                                                   grow
                                                   background={!item.active && "#82766B"}
                                                   color={!item.active ? "#F2EFE2" : undefined}
                                                   borderColor={item.active ? "#82766B" : "#F2EFE2"}
                                                   index={(dropDownItems.length - index).toString()}
                                                   dropDownHover={!item.active}
                                               >
                                                   <Link href={item.path} passHref>
                                                       <Label >{item.name}</Label>
                                                   </Link>
                                               </Tab>
                                           )}
                                       )}
                                    </DropDown>
                                   }
                                </>
                            }  */}
		</NavContainer>
	);
};

const NavContainer = styled.nav<{ open: boolean }>`
	position: fixed;
	top: 0;
	right: ${(props) => (props.open ? '0' : '-250px')};
	transition: 0.5s ease-in-out;
	width: 250px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 10px;
	background: ${(props) => props.theme.palette.dark.primary};
	overflow: scroll;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		overflow: unset;
		padding: 0;
		position: relative;
		top: 15px;
		right: unset;
		width: ${(props) => props.theme.breakpoints.md};
		background: transparent;
	}
	@media (min-width: ${(props) => props.theme.breakpoints.lg}) {
		width: ${(props) => props.theme.breakpoints.lg};
	}
`;
const FeatherIcon = styled(GiFeather)`
	margin-bottom: 60px;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
	}
`;

const BurgerContainer = styled.div`
	position: fixed;
	top: 40px;
	right: 20px;
	cursor: pointer;
	height: 25px;
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

const NavBar = styled.ul<{ borderBottom: string }>`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: start;
	list-style-type: none;
	padding: 0;
	margin: 0;
	width: 100%;
	height: 50%;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		flex-direction: row;
		align-items: end;
		border-bottom: ${(props) => props.borderBottom};
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
