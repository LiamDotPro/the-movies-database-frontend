/**
 * If this function gets much bigger I would recommend converting it to a switch statements.
 * @param score
 * @returns {string}
 */
export const getRatingColourClassNameByScore = (score) => {

	if (score > 70) {
		return ratingColours.GOOD
	}

	if (score > 50) {
		return ratingColours.MEDIOCRE
	}

	if (score > 0) {
		return ratingColours.BAD
	}

	return ratingColours.BAD
}

/**
 * Acts as an Enum for rating colors.
 * @type {{BAD: string, GOOD: string, MEDIOCRE: string}}
 */
export const ratingColours = {
	GOOD: 'tmdb-good-rating',
	MEDIOCRE: 'tmdb-mediocre-rating',
	BAD: 'tmdb-bad-rating'
}
