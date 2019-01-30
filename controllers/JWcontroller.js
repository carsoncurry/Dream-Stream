
const JustWatch = require('./');

function print_result(name, result)
{
	console.log(name+":");
	console.log(JSON.stringify(result, null, 4));
	console.log("\n\n\n\n");
}

const filterForFlatrate = x => x.filter(flatrate => flatrate.monetization_type === "flatrate");

findByTitle = () => (async function (){
	var justwatch = new JustWatch();

	var searchResult = await justwatch.search({query: 'always sunny'});
	// print_result("search", searchResult.items[0]);

	var offers = searchResult.items[0].offers;

	var streamArray = filterForFlatrate(offers)

	print_result("filtered", streamArray)

	// var episodes = await justwatch.getEpisodes(searchResult.items[0].id);
	// print_result("episodes", episodes);
})();

module.exports ={ findByTitle }