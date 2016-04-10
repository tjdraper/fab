module.exports = function(grunt, vars) {
	// Configure additional watch files
	vars.conf.bsFiles.src = vars.watch.concat(vars.conf.bsFiles.src);

	// Configure proxy
	if (vars.projectFile.proxy === false) {
		vars.conf.bsOptions.open = false;
	}

	// Return the modified variables
	return vars;
};
