import React from 'react';
import styled from 'styled-components';

type Props = {
    as?: React.ElementType;
    background?: string;
    color?: string | undefined;
    onMouseEnter?: () => void;
    onClick?: () => void;
    index?: string;
    grow?: boolean;
    borderColor?: string;
    active?: boolean;
    hover?: boolean;
    dropDownHover?: boolean;
    width: string;
    menu?: boolean
};

export const Tab: React.FC<Props> = ({
    children,
    as,
    background,
    color,
    onMouseEnter,
    onClick,
    index,
    grow,
    borderColor,
    active,
    hover,
    dropDownHover,
    width,
    menu
}) => {
    return (
        <Container
            as={as}
            background={background}
            color={color}
            onMouseEnter={onMouseEnter}
            onClick={onClick}
            index={index}
            grow={grow}
            borderColor={borderColor}
            active={active}
            hover={hover}
            dropDownHover={dropDownHover}
            width={width}
            menu={menu}
        >
            {children}
        </Container>
    );
};

const Container = styled.div<Props>`
	height: ${(props) => (props.active ? '40px' : '36px')};
	width: ${(props) => props.width};
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.background || '#F2EFE2'};
	color: ${(props) => props.color || '#82766B'};
	cursor: pointer;
	z-index: ${(props) => props.index || '1'};
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 100;
	font-family: ${(props) => props.theme.text.menu};
	line-height: 14px;
    flex-grow: ${(props) => props.grow && '1'};
    ${props => props.menu &&
        `border-top: 2px solid ${props.borderColor || '#EB2E5B'};
        box-shadow: ${props.theme.shadows.hard.bottom};`

    }
    &:first-of-type {
        ${props => props.menu && `border-top : none`};
    }
	&:hover {
		height: ${(props) => props.hover && '38px'};
		background: ${(props) => (props.hover || props.dropDownHover) && '#34312e'};
		transition: 0.1s ease;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		box-shadow: ${(props) => props.theme.shadows.hard.right};
		margin: 0 1px;
		&:first-of-type {
			margin-left: 0;
            border-top: 2px solid ${(props) => props.borderColor || '#EB2E5B'};
		}
		&:last-of-type {
			margin-right: 0;
            box-shadow: none;
		}
        border-top: 2px solid ${props => props.borderColor || '#EB2E5B'};
        border-bottom: none;
	}
`;

export default Tab;
