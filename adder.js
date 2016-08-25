var numbers = process.argv.slice(2);
console.log(
	numbers.reduce(function (previous, current) {
		return previous + Number(current);
	}, 0)
);
