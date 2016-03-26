function Router($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: './js/controllers/homeTemplate.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  })
 .when("/test/tutu", {
templateUrl: "./js/controllers/test2.html",
controller: "test2",
controllerAs: "vm"
})
 // #addRoot#
}

module.exports = Router;
  