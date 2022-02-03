
export interface GameColors {
    icons: string[];
    containers: string[];
}

export interface GameSettings {
    level: number;
    game: string;
    colors: GameColors;
    totalCount: number;
}