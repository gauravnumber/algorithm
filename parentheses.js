const generateParentheses = n => {
	const helper = (p, l, r, parent = []) => {
		if (l) {
			helper(p + '(', l - 1, r, parent)
		}

		if (r > l) {
			helper(p + ')', l, r - 1, parent)
		}

		if (!r) {
			// parent += p
			parent.push(p)
		}

		return parent
	}

	return helper("", n, n)
}

console.log(generateParentheses(3))