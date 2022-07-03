class Main {
	public string[] helper(string p, int l, int r, string[] parent) {
		if (l) {
			helper(p + '(', l - 1, r);
		}

		if (r > l) {
			helper(p + ')', l, r - 1);
		}

		if (!r) {
			parent.push(p);
		}

		return parent;
	}

	public void generateParenteses(int n) {
		return helper('(', n, n);
	}

	public static void main(String[] args) {
		Main main = new Main();
		System.out.println(main.generateParenteses(3));
	}


}