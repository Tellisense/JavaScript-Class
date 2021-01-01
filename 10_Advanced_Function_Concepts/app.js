// Javascript Reserved keywords

// abstract	arguments	await*	boolean
// break	byte	case	catch
// char	class*	const	continue
// debugger	default	delete	do
// double	else	enum*	eval
// export*	extends*	false	final
// finally	float	for	function
// goto	if	implements	import*
// in	instanceof	int	interface
// let*	long	native	new
// null	package	private	protected
// public	return	short	static
// super*	switch	synchronized	this
// throw	throws	transient	true
// try	typeof	var	void
// volatile	while	with	yield

//arguments
//  is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.

function funct1(a, b, c) {
  console.log(arguments[1]);
}

const myArrow = (a, b, c) => {
  console.log(arguments);
};
// funct1(1, 2, 3);
myArrow(1, 2, 3);

// Differences & Limitations of Arrow Functions vs Traditional Functions:

//     Does not have its own bindings to this or super, and should not be used as methods.
//     Does not have arguments, or new.target keywords.
//     Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
//     Can not be used as constructors.
//     Can not use yield, within its body.

const justin = {
  firstName: "Justin",
  isCool: true,
  age: 22,
  drive: function () {
    console.log(this.age);
  },
};

// console.log(justin.firstName);
// console.log(justin.isCool);
console.log(justin.drive());
