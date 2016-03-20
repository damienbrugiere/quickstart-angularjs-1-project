function Router($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: './html/homeTemplate.html',
    controller: 'HomeController',
    controllerAs: 'vm'
  })
}

module.exports = Router;
  