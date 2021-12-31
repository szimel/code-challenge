const findSum = function(array) {
  return array.reduce((x, y) => x + y, 0);
};

const findFrequency = function(array) {
  // couldn't figure it out
};

const isPalindrome = function(str) {
    i = str.length -1;
    if (str[0] === str[i]) {
        return true;
    } else {
        return false;
    }
};

const largestPair = function(array) {
    let z = 0;
    for(i = 0; i < array.length; i++) {
        let x = array[i];
        let y = array[i + 1];
        if(x * y > z) {
            z = x * y;
        }
    }
    return z;
};

const removeParenth = function(str) {
    let position1 = str.indexOf('(');
    let position2 = str.indexOf(')') + 1;
    const r = str.slice(position1, position2)
    let a = str.split(r);
    let b = a[0] + a[1];
    return b;
};

const scoreScrabble = function(str) {
	score = {
	a: 1,
	e: 1,
	i: 1,
	o: 1,
	u: 1,
	l: 1,
	n: 1,
	r: 1,
	s: 1,
	t: 1,
	d: 2,
	g: 2,
	b: 3,
	c: 3,
	m: 3,
	p: 3,
	f: 4,
	h: 4,
	v: 4,
	w: 4,
	y: 4,
	k: 5,
	j: 8,
	x: 8,
	q: 10,
	z: 10,
	};
	sum = 0;
	for(i = 0; i < str.length; i++) {
		sum += score[str[i]];
	} return sum;
};
