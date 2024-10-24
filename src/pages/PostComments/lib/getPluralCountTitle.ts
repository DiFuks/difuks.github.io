export const getPluralCountTitle = (count: number): string => {
	const ruOrdinalRules = new Intl.PluralRules('ru-RU');

	const commentPlurals = new Map([
		['one', 'комментарий'],
		['few', 'комментария'],
		['many', 'комментариев'],
	]);

	const rule = ruOrdinalRules.select(count);

	const commentPlural = commentPlurals.get(rule);
	return `${count} ${commentPlural}`;
};
