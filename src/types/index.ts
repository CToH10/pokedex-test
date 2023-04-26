export interface iPokemon {
  name: string;
  url: string;
}
export type iPokeList = Array<iPokemon>;

export interface iMove {
  move: {
    name: String;
    url: String;
  };
  version_group_details: String;
}
