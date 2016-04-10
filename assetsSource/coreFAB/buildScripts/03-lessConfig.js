module.exports = function(grunt, vars) {
	// Configure initial Less compile array and add core fab.less file
	vars.conf.lessFiles[vars.assetsPath + '/css/style.min.css'] = [
		vars.assetsSource + '/coreFAB/css/fab.less'
	];

	// Check if there are build files from the project file
	if (vars.projectFile.lessBuild.length) {
		// Loop through the build files in the project file
		vars.projectFile.lessBuild.forEach(function(i) {
			// Push the file into the compile array
			vars.conf.lessFiles[vars.assetsPath + '/css/style.min.css'].push(
				vars.assetsSource + '/' + i
			);
		});
	}

	// Check if there are individual Less files
	if (Object.keys(vars.projectFile.lessFiles).length) {
		// Loop through the individual Less files
		for (var key in vars.projectFile.lessFiles) {
			// Add individual Less file to the array to be compiled
			vars.conf.lessFiles[vars.assetsPath + '/' + key] =
				vars.assetsSource + '/' + vars.projectFile.lessFiles[key];
		}
	}

	// Return the modified variables
	return vars;
};
