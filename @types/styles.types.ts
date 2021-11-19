export interface ITheme {
	palette: {
		dark: {
			primary: string;
			secondary: string;
		};
		light: {
			primary: string;
			secondary: string;
		};
	};
	shadows: {
		hard: {
			right: string;
			bottom: string;
            top:string;
            left: string
		};
		soft: {
			bottom: string;
            left: string
		};
	};
	text: {
		siteTitle: string;
		siteSubtitle: string;
		menu: string;
		headings: string;
		text: string;
	};
	breakpoints: {
		sm: string;
		md: string;
		lg: string;
		xlg: string;
	};
};
