module.exports = function(grunt, vars) {
	// Start primary JS file compile array
	vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'] = [];

	// Check for build before files in project file
	if (vars.projectFile.jsBuildBefore.length) {
		// Loop through the build before files
		vars.projectFile.jsBuildBefore.forEach(function(i) {
			// Push them into the primary JS file compile array
			vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
				vars.assetsSource + '/' + i
			);
		});
	}

	// Make sure JS components have not been disabled
	if (vars.enabledJsComponents.indexOf('base') > -1) {
		// Push core files into primary JS file compile array
		vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
			vars.assetsSource + '/coreFAB/js/fab.js',
			vars.assetsSource + '/coreFAB/js/base/**/*.js',
			vars.assetsSource + '/js/controller.js'
		);
	}

	// Add files in build and module build directories to primary JS file
	vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
		vars.assetsSource + '/js/build/**/*.js',
		vars.assetsSource + '/modules/build/**/js/config.js',
		vars.assetsSource + '/modules/build/**/js/**/*.js'
	);

	// Check for build files in the project file
	if (vars.projectFile.jsBuild.length) {
		// Loop through the build files
		vars.projectFile.jsBuild.forEach(function(i) {
			// Add the file to the primary JS file array
			vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
				vars.assetsSource + '/' + i
			);
		});
	}

	// Check if JS componentents are not disabled
	if (vars.enabledJsComponents.indexOf('base') > -1) {
		// Add the ready.js file to the primary file array
		vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
			vars.assetsSource + '/coreFAB/js/ready.js'
		);
	}

	// Check for build after files
	if (vars.projectFile.jsBuildAfter.length) {
		// Loop through the build after files
		vars.projectFile.jsBuildAfter.forEach(function(i) {
			// Add the file to the primary JS file array
			vars.conf.jsFiles[vars.assetsPath + '/js/script.min.js'].push(
				vars.assetsSource + '/' + i
			);
		});
	}

	// Check if there are individual JS files to uglify in the project file
	if (Object.keys(vars.projectFile.jsFiles).length) {
		// Loop through the files
		for (var key in vars.projectFile.jsFiles) {
			// Create a uglify file array for it
			vars.conf.jsFiles[vars.assetsPath + '/' + key] =
				vars.assetsSource + '/' + vars.projectFile.jsFiles[key];
		}
	}

	// Return the modified variables
	return vars;
};
