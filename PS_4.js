
//list all the food items with category protein
const food = require('./food.json');

let newArray = food.filter(function (el) {
    return el.category == "Protein"
}
);
function listItem(i) {
	i.forEach((item) => {
		console.log(item);
	});
}
listItem(newArray);
