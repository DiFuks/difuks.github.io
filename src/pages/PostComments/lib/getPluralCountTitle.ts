export const getPluralCountTitle = (count: number): string => {
	const ruOrdinalRules = new Intl.PluralRules('ru-RU');

	const commentPlurals = new Map([
		['one', 'комментарий'],
		['few', 'комментария'],
		['many', 'комменнтариев'],
	]);

	const rule = ruOrdinalRules.select(102);

	const commentPlural = commentPlurals.get(rule);
	return `${count} ${commentPlural}`;
};
