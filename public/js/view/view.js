'use strict';

let templatesPath = './html-templates/';

class View {
	header(selector, data) {
		templateLoader.load(selector, templatesPath + 'common/' + 'header.html', data);
	}

	footer(selector, data) {
		templateLoader.load(selector, templatesPath + 'common/' + 'footer.html', data);
	}

	home(selector, data) {
		templateLoader.load(selector, templatesPath + 'home.html', data);
	}
}
