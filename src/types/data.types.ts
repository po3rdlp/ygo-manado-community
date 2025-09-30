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

// Deck

export interface Deck {
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
  imageUrl?: string;
}


export interface DeckMatchHistory {
  matchId: number;
  player1Name: string;
  player2Name: string;
  player1DeckName: string;
  player2DeckName: string;
  player1Score: number;
  player2Score: number;
  round: string;
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

// player detail duellist
export interface PlayerDuelList {
  duelist: Duelist;
  matches: DuelListMatch[];
}

export interface Duelist {
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

export interface DuelListMatch {
  matchId: number;
  round: string;
  playerDeck: DeckInfo;
  opponentName: string;
  opponentDeck: DeckInfo;
  playerScore: number;
  opponentScore: number;
}

export interface DeckInfo {
  name: string;
  imageUrl: string;
}



//

export interface TournamentsList {
  id: number,
  name: string,
  format: string,
  banlist: string,
  top1: string,
  top2 : string
  top3: string,
}

// Tournaments match
export interface TournamentsPlayer {
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

export interface TournamentsDeck {
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
  imageUrl: string;
}

export interface TournamentsMatchResult {
  id: number;
  player1: TournamentsPlayer;
  player2: TournamentsPlayer;
  player1Deck: TournamentsDeck;
  player2Deck: TournamentsDeck;
  player1Score: number;
  player2Score: number;
  round: string;
}

export interface TournamentsRound {
  round: string;
  matches: TournamentsMatchResult[];
}


// tournaments info

export interface Participant {
  duelistName: string;
  deckName: string;
}

export interface TournamentInfo {
  id: number;
  name: string;
  date: string;
  participants: Participant[];
}


