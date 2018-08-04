const metalsmith = require('metalsmith');
const ejs = require('ejs');
const async = require('async');

const log = require('./log.js');

function render(proInfo) {
	return function(files, metalsmith, done) {
		async.each(Object.keys(files), (filename, next) => {
			let content = files[filename].contents.toString();

			// 如果文件中没有使用 ejs 语法，忽略
			if (/<\%|\%>/g.test(content)) {
				content = ejs.render(content, proInfo);
				files[filename].contents = new Buffer(content);
			}
			return next();
		}, done);
	}
}

module.exports = function(proInfo, dest, to) {
	metalsmith(dest)
		.source('.')
		.destination(to) 
		.use(render(proInfo))
		.build(function(err) {
	    if (err) {
	    	log.error('Error when rendering template complete message:', err);
	    	throw err;
	    }
	    log.success(`^.^ Generated ${proInfo.name} success. please use [npm install] to install dependency.`);
	  });
};
