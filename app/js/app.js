
'use strict';

// Imports
global.jQuery = require('jquery');
require('bootstrap');
var angular = require('angular');
var angularRoute = require('angular-route');
var HomeController = require('./controllers/homeController');
var HomeService = require('./services/homeService');
var Navbar = require('./directives/navbar');
var Router = require('./router.js');
 var test2 = require("./controllers/test2"); 
 // #import# 

// Module
var module = angular.module('app', [angularRoute]);

//services
module.service('HomeService',[HomeService]);
// controller
module.controller('HomeController',[HomeController]);
 module.controller("test2",[test2]);
 // #addController#
//directive
module.directive('navbar',[Navbar]);

//route
module.config(Router);