export interface iPokemon {
	name: string;
	url: string;
}
export type iPokeList = Array<iPokemon>;

export interface iMove {
	move: {
		name: string;
		url: string;
	};
	version_group_details: string;
}
