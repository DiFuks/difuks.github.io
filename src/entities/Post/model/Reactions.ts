export type ReactionType = 'likes' | 'dislikes';

export interface Reaction {
	isActive: boolean;
	count: number;
}

export type Reactions = Record<ReactionType, Reaction>;
