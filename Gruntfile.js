//Gruntfile.js

module.exports = function(grunt) {

  var gruntTasks = [
    "grunt-autoprefixer",
    "grunt-nodemon",
    "grunt-concurrent",
    "grunt-contrib-watch",
    "grunt-contrib-less"
  ];

  gruntTasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask("default", ["autoprefixer", "concurrent", "less"]);

  grunt.initConfig({
    concurrent: {
      target: {
        tasks: ["watch", "nodemon"],
        options: {
          logConcurrentOutput: true
        }
      }
    },
    nodemon: {
      target: {
        script: "index.js"
      }
    },
    watch: {
      options: {
        livereload: true
      },
      prefix: {
        files: "source/css/**/*.css",
        tasks: ["autoprefixer"]
      },
      templates: {
        files: "views/**/*.html",
        tasks: []
      },
      less: {
        files: "source/less/**/*.less",
        tasks: ["less"]
      }
    },
    autoprefixer: {
      target: {
        expand: true,
        flatten: true,
        src: "source/css/**/*.css",
        dest: "build/css/"
      }
    },
    less: {
      development: {
        files: {
          "build/css/result.css" : "source/less/source.less"
        }
      }
    }
  });




};
