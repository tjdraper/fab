/* globals module, __dirname */

module.exports = function(grunt) {
	// Get base project file
	var baseProjectFile = grunt.file.readJSON(
		__dirname + '/baseProjectFile.json'
	);

	// Get project file
	var projectFile = grunt.file.readJSON(
		__dirname + '/../../project.json'
	);

	// Set project file overrides var
	var projectFileOverrides = {};

	// Set config variable
	var config = {};

	// Get project file overrides if they exist
	if (grunt.file.exists(__dirname + '/../../projectOverrides.json')) {
		projectFileOverrides = grunt.file.readJSON(
			__dirname + '/../projectOverrides.json'
		);
	}

	// Loop through baseProjectFile, set properties based on order of succession
	for (var key in baseProjectFile) {
		if (projectFileOverrides[key] !== undefined) {
			config[key] = projectFileOverrides[key];
		} else if (projectFile[key] !== undefined) {
			config[key] = projectFile[key];
		} else {
			config[key] = baseProjectFile[key];
		}
	}

	grunt.fabConfig = config;
};
