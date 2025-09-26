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

export interface TopDeckTierList {
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
  imageUrl: string | null;
  winrate: number;   
  tier: string;    
}
