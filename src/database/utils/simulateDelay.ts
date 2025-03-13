const simulateDelay = (min: number, max?: number) => {
	let delay = min;
	if (max !== undefined) {
		const minC = Math.ceil(min);
		const maxF = Math.floor(max);
		delay = Math.floor(Math.random() * (maxF - minC) + minC);
	}
	return new Promise((resolve) => setTimeout(resolve, delay));
};

export default simulateDelay;
