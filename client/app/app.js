/**
 * Created by Corning on 2016/6/23.
 */
import angular from 'angular';
import route from 'angular-route';
import config from './config';

/* jQuery and components */
import $ from 'jquery';
window.jQuery=window.jQuery||$;

/* Bootstrap */
import 'bootstrap/less/bootstrap.less';
require('bootstrap/dist/js/bootstrap');
//import 'bootstrap/dist/js/bootstrap';

/* App module */
var app=angular.module('app',[route]);

/* Directives */

/* Services */
import cacheService from './services/cacheService';
app.service('cacheService',cacheService);

/* App run */
app.run(['$rootScope',function ($rootScope) {

}]);

app.config(config);