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
        >
            {children}
        </Container>
    );
};

const Container = styled.div<Props>`
	height: ${(props) => (props.active ? '40px' : '36px')};
	width: ${(props) => props.width};
	margin: 0 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: ${(props) => props.background || '#F2EFE2'};
	color: ${(props) => props.color || '#82766B'};
	cursor: pointer;
	box-shadow: ${(props) => props.theme.shadows.hard.bottom};
	z-index: ${(props) => props.index || '1'};
	flex-grow: 0;
	margin: 2px 0;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 100;
	font-family: ${(props) => props.theme.text.menu};
	line-height: 14px;
	border-top: 2px solid ${(props) => props.theme.palette.dark.secondary};
	&:last-of-type {
		box-shadow: none;
	}
	&:hover {
		height: ${(props) => props.hover && '38px'};
		background: ${(props) => (props.hover || props.dropDownHover) && '#34312e'};
		transition: 0.1s ease;
	}

	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		box-shadow: ${(props) => props.theme.shadows.hard.right};
		margin: 0 1px;
		flex-grow: ${(props) => props.grow && '1'};
		&:first-of-type {
			margin-left: 0;
		}
		&:last-of-type {
			margin-right: 0;
		}
		border-top: 2px solid ${(props) => props.borderColor || '#EB2E5B'};
	}
`;

export default Tab;
