/**
 * Created by Corning on 2016/6/23.
 */
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import UIRouter from 'angular-ui-router';
import material from 'angular-material';
import animate from 'angular-animate';
import aria from 'angular-aria';
import config from './config';

/* jQuery and components */
import $ from 'jquery';
window.jQuery=window.jQuery||$;

/* Bootstrap */
import 'bootstrap/less/bootstrap.less';
require('bootstrap/dist/js/bootstrap');
//import 'bootstrap/dist/js/bootstrap';//You can not import bootstrap like this

/* App module */
var app=angular.module('myApp',[UIRouter,ngSanitize,material,animate,aria]);

/* Directives */

/* Services */
import cacheService from './services/cacheService';
app.service('cacheService',['$rootScope',cacheService]);

/* App run */
app.run(['$rootScope',function ($rootScope) {

}]);

app.config(['$stateProvider', '$urlRouterProvider',config]);