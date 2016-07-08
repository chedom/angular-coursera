'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: ['Gruntfile.js', 'app/scripts/{,*/}*.js']
            }
        },

        useminPrepare: {
            html: 'app/menu.html',
            options: {
                dest: 'dist'
            }
        },

// Filerev
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },

            release: {
            // filerev:release hashes(md5) all assets (images, js and css )
            // in dist directory
            files: [{
                src: [
                    'dist/scripts/*.js',
                    'dist/styles/*.css',
                ]}]
            }
        },

// Usemin
// Replaces all assets with their revved version in html and css files.
// options.assetDirs contains the directories for finding the assets
// according to their relative paths
        usemin: {
            html: ['dist/*.html'],
            css: ['dist/styles/*.css'],
            js: ['dist/scripts/*.js'],
            options: {
                assetsDirs: ['dist', 'dist/styles', 'dist/scripts']
            }
        },

        copy: {
            dist: {
                cwd: 'app',
                src: [ '**','!styles/**/*.css','!scripts/**/*.js' ],
                dest: 'dist',
                expand: true
            },

            fonts: {
                files: [
                    {
                        //for bootstrap fonts
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/bootstrap/dist',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    },
                    {
                        //for font-awesome
                        expand: true,
                        dot: true,
                        cwd: 'bower_components/font-awesome',
                        src: ['fonts/*.*'],
                        dest: 'dist'
                    }
                ]
            }
        },

        clean: {
            build: {
                src: [ 'dist/']
            }
        },

    });

    grunt.registerTask('build', [
        'clean',
        'jshint',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy',
        'filerev',
        'usemin'
    ]);
    grunt.registerTask('default', ['build']);
};
