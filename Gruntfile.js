// Gruntfile.js
module.exports = function(grunt) {

  grunt.initConfig({
    
    //---------------------------- handlebars ----------------------------//

    handlebars: {
      compile: {
        options: {
          namespace: "JST"
        },
        files: {
          "public/src/app/templates.js": "public/src/**/templates/*.hbs",
        }
      }
    },

    //---------------------------- targethtml ----------------------------//

    targethtml: {
      dist: {
        files: {
          'public/dist/index.html': 'public/src/index.html'
        }
      }
    },

    //---------------------------- jshint ----------------------------//

    jshint: {
      all: ['public/src/**/*.js'] 
    },

    //---------------------------- uglify ----------------------------//

    uglify: {
      build: {
        files: {
          'public/dist/js/pollabear.min.js': ['public/src/**/*.js']
        },
        options: {
          mangle: true
        }
      }
    },

    //---------------------------- sass ----------------------------//

    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'expanded'
        },
        files: {                         // Dictionary of files
           'public/src/app/styles/main_compiled.css' : 'public/src/app/styles/main.scss'   // 'destination': 'source'
        }
      }
    },

    //---------------------------- cssmin ----------------------------//

    cssmin: {
      options: {
        shorthandCompacting: true,
        restructuring: false,
        aggressiveMerging: false
        // advanced: false
      },
      build: {
        files: {
          'public/dist/css/pollabear.min.css': 'public/src/**/styles/*.css'
        }
      }
    },  

    //---------------------------- nodemon ----------------------------//

    nodemon: {
      dev: {
        script: 'index.js'
      }
    },

    //---------------------------- watch ----------------------------//

    watch: {
        options: {
            livereload: true,
            spawn: false,
            interrupt: true
        },
        css: {
          files: ['public/src/**/styles/*.css'],
          tasks: ['cssmin']
        },
        // less: {
        //   files: ['public/src/styles/less/*.less'],
        //   tasks: ['less', 'cssmin']
        // },
        js: {
          files: ['public/src/**/*.js'],
          tasks: ['uglify']
        },
        html: {
          files: ['public/src/**/templates/*.hbs'],
          tasks: ['handlebars:compile','uglify']
        },
        index: {
            files: ['public/src/index.html'],
            tasks: ['targethtml:dist']
        }
    },

    //---------------------------- concurrent ----------------------------//

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon:dev', 'watch']
    },   

  });

  grunt.loadNpmTasks('grunt-targethtml');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');
  
  grunt.registerTask('default', ['sass:dist', 'cssmin', 'handlebars:compile', 'uglify', 'targethtml:dist', 'concurrent']);
  grunt.registerTask('watching', ['sass:dist', 'cssmin', 'handlebars:compile', 'uglify', 'targethtml:dist', 'watch']);
  grunt.registerTask('build', ['sass:dist', 'cssmin', 'handlebars:compile', 'uglify', 'targethtml:dist']);
  // grunt.registerTask('default', ['nodemon:dev']); 


  // grunt.registerTask('default', ['handlebars:compile']); 

};