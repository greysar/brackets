module.exports = function check(str, bracketsConfig) { // check ( '([{}])' ,  [ [ '(' ,  ')' ] ,  [ '[' ,  '] ' ],  [ '{' ,  '}' ] ] )

	let splitedString = str.trim().split(' ');
	let bracketsArr = [];
	splitedString = splitedString.join('').split('');

	while (splitedString.length != 0) {
		let count = 0;
		bracketsConfig.forEach(item => {
			for (let i = 0; i < splitedString.length; i++) {
				item = item.join('').trim();
				item = item.split(' ').join('').split('');
				if (item.join('') == splitedString.slice(i, i + 2).join('').trim()) {
					bracketsArr.push(true);
					return splitedString.splice(i, 2);
				}
			}
			count++;
		});
		if (splitedString.length == 1 || count == bracketsConfig.length) return false;
	}

	if (bracketsArr.length != 0) return true;
}