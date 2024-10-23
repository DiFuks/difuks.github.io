export const getPublishDateText = (date: Date): string => {
	const rtf = new Intl.RelativeTimeFormat('en', { style: 'short' });
	const nowDate = new Date();

	const dateDiff = nowDate.getTime() - date.getTime();
	const dateDiffInDays = Math.round(dateDiff / (1000 * 60 * 60 * 24));

	if (dateDiffInDays === 0) {
		return 'today';
	}

	if (dateDiffInDays <= 7) {
		return rtf.format(-dateDiffInDays, 'days');
	}

	return date.toLocaleDateString('en-US');
};
