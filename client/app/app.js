/**
 * Created by Corning on 2016/6/23.
 */
import angular from 'angular';
import ngSanitize from 'angular-sanitize';
import ngUIRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
import ngAnimate from 'angular-animate';
import ngAria from 'angular-aria';
import config from './config';

/* jQuery and components */
//import $ from 'jquery';
//window.jQuery=window.jQuery||$;

/* Bootstrap */
//import 'bootstrap/less/bootstrap.less';
//require('bootstrap/dist/js/bootstrap');
//import 'bootstrap/dist/js/bootstrap';//You can not import bootstrap like this

/* Material Styles */ //we have material ui now,we don't need bootstrap any more ?
import 'angular-material/angular-material.scss';

/* App module */
var app=angular.module('myApp',[ngUIRouter,ngMaterial,ngAnimate,ngAria,ngSanitize]);

/* Directives */

/* Services */
import cacheService from './services/cacheService';
app.service('cacheService',['$rootScope',cacheService]);

/* App run */
app.run(['$rootScope',function ($rootScope) {
    
}]);

app.config(['$stateProvider', '$urlRouterProvider',config]);