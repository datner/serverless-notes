export function calculateCost(storage) {
	// 101+ -> 1$
	// 11-100 -> 2$
	// 1-10 -> 4$
	const rate = storage <= 10 ? 4 : storage <= 100 ? 2 : 1;

	return rate * storage * 100;
}
