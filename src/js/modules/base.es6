const utils = require('./utils.es6');

class Base{
	constructor(input,options, embeds){
		this.input = input;
		this.options = options;
		this.embeds = embeds;
	}

	process(){
		let match;
		while((match = utils.matches(this.regex, this.input)) !== null){
			let text = this.template(match[0]);
			this.embeds.push({
				text : text,
				index : match.index
			})
		}
		return this.embeds;
	}
}

module.exports = Base;