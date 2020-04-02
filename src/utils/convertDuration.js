export const convertDuration = (number) => {
	let hours = Math.floor(number / 60);
	let minutes = number % 60;
	return `${hours}h ${minutes} min`;
}
