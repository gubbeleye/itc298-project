var hapi = require("hapi");

var server = new hapi.Server();

var routes = require("./server/routes");

server.connection({port:8000});

server.start(function(){
  console.log(server.info);
});

server.views({
  path: "views/templates",
  engines: {
    html: require("handlebars")
  },
  layoutPath: "views",
  layout: "default",
  partialsPath: "views/partials",
  isCached: false
});

server.route(routes);

// server.route({
//   method: "GET",
//   path: "/",
//   handler: function(request, reply) {
//     reply.view("index", {
//       title: "Home"
//     });
//   }
// });
//
// server.route({
//   method: "GET",
//   path: "/page2",
//   handler: function(request, reply) {
//     reply.view("page2", {
//       title: "Page 2"
//     });
//   }
// });
//
// server.route({
//   method: "GET",
//   path: "/assets/{param*}",
//   handler: {
//     directory: {
//       path: "build"
//     }
//   }
// });
