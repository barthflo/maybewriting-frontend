import React, { useState, useEffect } from 'react';
import Tab from '../Tab';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useTheme } from '../../styles/theme';
import { GiFeather } from 'react-icons/gi';
import { useGlobal, MenuItem } from '../../pages/_app';


const Nav: React.FC<{ open: boolean }> = ({ open }) => {
	const [showDropDown, setShowDropDown] = useState<boolean>(false);
	const { asPath } = useRouter();
	const theme = useTheme();
	const { menu: { menu_item } } = useGlobal()

	console.log(asPath)

	const setActiveItem = (item: MenuItem): boolean => {
		console.log(item)
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
			<FeatherIcon color={theme.palette.light.primary} size="3em" />
			<NavBar borderBottom={!showDropDown && '20px solid'}>
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
const FeatherIcon = styled(GiFeather)`
	margin-bottom: 60px;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		display: none;
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
		align-items: flex-end;
		border-bottom: ${(props) => props.borderBottom};
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
