const input = document.querySelector('#input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const hourglass = document.querySelector('img');
const secYear = 31536000;
const secFullAge = 2270592000;
const daysFullAge = 26280;
const daysYear = 365;
const monthFullAge = 864;

const glassAnimation = () => {
	hourglass.classList.add('spin-animation');
	setTimeout(checkInput, 1000);
};

const checkInput = () => {
	if (input.value !== '') {
		calcTimeLeft();
		error.textContent = '';
		hourglass.classList.remove('spin-animation');
	} else {
		error.textContent = 'Please input your age!';
		answer.textContent = '';
		hourglass.classList.remove('spin-animation');
	}
};

const calcTimeLeft = () => {
	const currentAge = Number(input.value);
	const yearsLeft = 72 - currentAge;
	console.log(yearsLeft);
	const monthLeft = yearsLeft * 12;
	console.log(monthLeft);
	const daysLeft = yearsLeft * 365;
	console.log(daysLeft);
	const secLeft = yearsLeft * 31536000;
	console.log(secLeft);
	answer.classList.remove('hidden');
	answer.textContent = `If everything goes well you will live ${yearsLeft} years, ${monthLeft} months, ${daysLeft} days and ${secLeft} seconds...`;
};

hourglass.addEventListener('click', glassAnimation);
