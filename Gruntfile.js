module.exports = function(grunt) {

    grunt.initConfig({
        swigLocalization: {
			main: {
				src: ['templates/*.swig', 'templateData/*.json'],
	            outputDir: 'dist',
				templateDir: 'templates',
				templateDataDir: 'templateData'
			}
        }
    });

    grunt.loadNpmTasks('grunt-swig-localization');

    grunt.registerTask('default', ['swigLocalization']);
};
