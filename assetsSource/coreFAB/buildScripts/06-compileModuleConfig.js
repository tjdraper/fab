module.exports = function(grunt, vars) {
	// Add module compile
	grunt.file.expand(vars.assetsSource + '/modules/compile/*').forEach(function(i) {
		var moduleName = i.split('/').pop();

		// Copy the module primary less file into place
		grunt.file.copy(
			vars.assetsSource + '/coreFAB/css/module.less',
			i + '/css/module.less'
		);

		// Configure module Less
		vars.conf.lessFiles[vars.assetsPath + '/modules/' + moduleName + '/css/style.min.css'] = i + '/css/module.less';

		// Configure module JS
		vars.conf.jsFiles[vars.assetsPath + '/modules/' + moduleName + '/js/script.min.js'] = [];
		vars.conf.jsFiles[vars.assetsPath + '/modules/' + moduleName + '/js/script.min.js'].push(i + '/js/config.js');
		vars.conf.jsFiles[vars.assetsPath + '/modules/' + moduleName + '/js/script.min.js'].push(i + '/js/**/*.js');

		// Copy lib CSS files
		grunt.file.expand(i + '/css/lib/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});

		// Copy image files
		grunt.file.expand(i + '/img/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});

		// Copy font files
		grunt.file.expand(i + '/font/**/*').forEach(function(file) {
			var fileName = file.replace(i, '');

			if (grunt.file.isFile(file)) {
				grunt.file.copy(
					file,
					vars.assetsPath + '/modules/' + moduleName + fileName
				);
			}
		});
	});

	// Return the modified variables
	return vars;
};
