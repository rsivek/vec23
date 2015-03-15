/*global module,require*/
module.exports = function (grunt) {
    'use strict';
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        proj: require('./package.json'),
        license: grunt.file.read('LICENSE'),
        config: {
            src: 'src',
            distFile: 'dist/vec23.js'
        },
        jsdoc: {
            options: {
                destination: 'docs',
                template : 'node_modules/grunt-jsdoc/node_modules/ink-docstrap/template',
                configure : 'jsdoc.conf.json'
            },
            src: ['src/*.js', 'README.md']
        },
        concat: {
            options: {
                // Replace all 'use strict' statements in the code with a single one at the top
                // Also remove all 'require()' statements.
                banner: "'use strict';\n",
                process: function(src, filepath) {
                    return '// Source: ' + filepath + '\n' +
                        src.replace(/(^|\n).*('use strict'|"use strict"|require\(.*);?/g, '$1');
                },
            },
            dist: {
                src: '<%= config.src %>/**/*.js',
                dest: '<%= config.distFile %>'
            }
        },
        comments: {
            dist: {
                src: '<%= config.distFile %>'
            }
        },
        umd: {
            dist: {
                options: {
                    src: '<%= config.distFile %>',
                    template: 'umd.hbs',
                    globalAlias: '<%= proj.name %>'
                }
            }
        },
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '/*\n<%= proj.name %> v<%= proj.version %>\n\n<%= proj.description %>\n\n<%= license %>\n*/'
                },
                files: {
                    src: 'dist/*.js'
                }
            }
        },
        version: {
            project: {
                src: ['package.json', 'bower.json']
            },
            factory: {
                options: {
                    prefix: '\\s\\s*v'
                },
                src: 'build/factory.js'
            }
        },
        jasmine: {
            src: {
                src: '<%= config.src %>/*.js',
                options: {
                    specs: 'test/spec/*.js'
                }
            },
            dist: {
                src: ['<%= config.distFile %>', 'test/include/defVec.js'],
                options: {
                    specs: 'test/spec/*.js'
                }
            }
        }
    });

    grunt.registerTask('build', [
        'concat',
        'comments',
        'umd',
        'usebanner'
    ]);
};
