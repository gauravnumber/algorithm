def generateParenteses(n):
	def helper(p, l, r, parent = []):
		if l:
			helper(p + '(', l - 1, r)
		if r > l:
			helper(p + ')', l, r - 1)
		if not r:
			parent.append(p)
		return parent
	return helper('', n, n)

print(generateParenteses(3))