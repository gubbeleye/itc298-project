//routes.js

var routes = [

  {
    method: "GET",
    path: "/",
    handler: function(request, reply) {
      reply.view("index", {
        title: "Home"
      });
    }
  },
  {
    method: "GET",
    path: "/page2",
    handler: function(request, reply) {
      reply.view("page2", {
        title: "Page 2"
      });
    }
  },
  {
    method: "GET",
    path: "/assets/{param*}",
    handler: {
      directory: {
        path: "build"
      }
    }
  }  
];

module.exports = routes;
