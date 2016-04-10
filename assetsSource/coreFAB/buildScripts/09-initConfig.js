module.exports = function(grunt, vars) {
	grunt.initConfig({
		conf: vars.conf,
		projectFile: vars.projectFile,
		browserSync: {
			bsFiles: vars.conf.bsFiles,
			options: vars.conf.bsOptions
		},
		notify: {
			less: {
				options: {
					title: 'CSS',
					message: 'CSS compiled successfully'
				}
			},
			uglify: {
				options: {
					title: 'Javascript',
					message: 'Javascript compiled successfully'
				}
			}
		},
		less: {
			development: {
				options: {
					compress: vars.conf.lessCompress,
					yuicompress: vars.conf.lessCompress,
					optimization: 2,
					plugins: [
						require('less-plugin-glob')
					]
				},
				files: vars.conf.lessFiles
			}
		},
		uglify: {
			build: {
				options: {
					sourceMap: vars.conf.sourceMaps
				},
				files: vars.conf.jsFiles
			}
		},
		jshint: {
			files: [
				'<%= conf.assetsSource %>/js/build/**/*.js',
				'<%= conf.assetsSource %>/js/*.js'
			],
			options: {
				jshintrc: true
			}
		},
		jscs: {
			src: [
				'<%= conf.assetsSource %>/js/build/**/*.js',
				'<%= conf.assetsSource %>/js/*.js'
			],
			options: {
				config: '.jscs.json'
			}
		},
		watch: {
			grunt: {
				files: [
					'Gruntfile.js',
					'<%= conf.assetsSource %>/coreFAB/buildScripts/**/*',
					'<%= conf.assetsSource %>/fonts/**/*',
					'<%= conf.assetsSource %>/img/**/*',
					'<%= conf.assetsSource %>/modules/build/*',
					'<%= conf.assetsSource %>/modules/compile/*'
				],
				tasks: [
					'less',
					'notify:less',
					'uglify',
					'notify:uglify'
				]
			},
			styles: {
				files: [
					'<%= conf.assetsSource %>/coreFAB/css/**/*',
					'<%= conf.assetsSource %>/css/**/*.less',
					'<%= conf.assetsSource %>/css/**/*.css',
					'<%= conf.assetsSource %>/modules/build/**/css/**/*.less',
					'<%= conf.assetsSource %>/modules/build/**/css/**/*.css',
					'<%= conf.assetsSource %>/modules/compile/**/css/**/*.less',
					'<%= conf.assetsSource %>/modules/compile/**/css/**/*.css'
				],
				tasks: [
					'less',
					'notify:less'
				],
				options: {
					spawn: false
				}
			},
			javascript: {
				files: [
					'<%= conf.assetsSource %>/coreFAB/js/**/*',
					'<%= conf.assetsSource %>/js/**/*.js',
					'<%= conf.assetsSource %>/modules/build/**/js/**/*.js',
					'<%= conf.assetsSource %>/modules/compile/**/js/**/*.js'
				],
				tasks: [
					'uglify',
					'notify:uglify'
				],
				options: {
					spawn: false
				}
			},
			jshint: {
				files: [
					'<%= jshint.files %>'
				],
				tasks: [
					'jshint'
				],
				options: {
					spawn: false
				}
			},
			jscs: {
				files: [
					'<%= jscs.src %>'
				],
				tasks: [
					'jscs'
				],
				options: {
					spawn: false
				}
			}
		}
	});
};
