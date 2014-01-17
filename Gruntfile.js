module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-haml');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      haml: {
        files: '**/*.haml',
        tasks: ['haml'],
        options: {
          livereload: true,
        },
      },
      coffee: {
        files: '**/*.coffee',
        tasks: ['coffee'],
        options: {
          livereload: true,
        },
      },
      sass: {
        files: '**/*.sass',
        tasks: ['sass'],
        options: {
          livereload: true,
        },
      },
      copy: {
        files: 'src/image/*',
        tasks: ['copy']
      },
    },
    haml: {
      compile: {
        files: {
          "dst/index.html": ["src/haml/index.haml"],
          "dst/aboutus.html": ["src/haml/aboutus.haml"],
          "dst/activities.html": ["src/haml/activities.haml"],
          "dst/kurarennkai.html": ["src/haml/kurarennkai.haml"],
          "dst/schedule.html": ["src/haml/schedule.haml"],
          "dst/opinions.html": ["src/haml/opinions.haml"],
          "dst/pal.html": ["src/haml/pal.haml"],
          "dst/contact.html": ["src/haml/contact.haml"]
        }
      }
    },
    coffee: {
      compile: {
        files: {
          "dst/javascript/app.js": "src/coffee/app.coffee"
        }
      }
    },
    sass: {
      compile: {
        options: {
        },
        files: {
          "dst/stylesheet/style.css": "src/sass/style.sass"
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          'dst/stylesheet/bootstrap.css': ['src/style/bootstrap.css']
        }
      }
    },
    uglify: {
      my_target: {
        files: {
          'dst/javascript/bootstrap.js': ['src/js/bootstrap.js'],
          'dst/javascript/jquery-2.0.3.js': ['src/js/jquery-2.0.3.js']
        }
      }
    },
    copy: {
      main: {
        files: [
          {expand: true, src: ['**'], dest: 'dst/image', cwd: 'src/image'}
        ]
      }
    },
    clean: {
      build: ["dst"]
    }
  });

  grunt.registerTask('default', ['clean', 'haml', 'sass', 'cssmin', 'coffee', 'uglify', 'copy'])
  
};
