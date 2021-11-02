import React from 'react';
import Header from './Header';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
	return (
		<LayoutContainer>
			<Header />
			<PageContainer>{children}</PageContainer>
			<div style={{ height: 150, background: '#34312e' }} />
		</LayoutContainer>
	);
};

export default Layout;

const LayoutContainer = styled.div`
	background: ${(props) => props.theme.palette.dark.primary};
`;

const PageContainer = styled.main`
	min-height: 150vh;
	background: ${(props) => props.theme.palette.light.primary};
	width: 100%;
	margin: 0 auto;
	padding: 100px 20px 0;
	@media (min-width: ${(props) => props.theme.breakpoints.md}) {
		padding: 150px 60px 0;
		width: ${(props) => props.theme.breakpoints.md};
	}
	@media (min-width: ${(props) => props.theme.breakpoints.lg}) {
		width: ${(props) => props.theme.breakpoints.lg};
	}
`;
