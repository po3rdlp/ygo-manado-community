export interface TopPlayers {
  id: number;
  name: string;
  participation: number;
  topping: number;
  gold: number;
  silver: number;
  bronze: number;
  win: number;
  draw: number;
  lose: number;
  point: number;
  avatarUrl: string | null; 
}

export interface TopDecks {
  id: number;
  name: string;
  win: number;
  lose: number;
  draw: number;
  point: number;
  imageUrl: string | null;
}
