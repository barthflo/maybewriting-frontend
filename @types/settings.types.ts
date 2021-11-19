import { IMedia } from './medias.types';

export interface IMenuItem {
	id: number;
	name: string;
	path: string;
	active?: boolean;
}

export interface IMenu {
	id: number;
	menu_item: IMenuItem[];
}

export interface ISettings {
	google_analytics_key: string;
	site_title: string;
	site_subtitle: string;
	logo: IMedia;
	quote: {
		id: number;
		content: string;
		author: string;
	};
	menu: IMenu;
}
