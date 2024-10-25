export type ReactionType = 'likes' | 'dislikes';

export interface Reactions {
	activeType: ReactionType | null;
	types: Record<ReactionType, number>;
}
