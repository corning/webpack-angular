/**
 * Created by Corning on 2016/6/25.
 */

import HomeController from './controllers/home/home.controller';
import AboutController from './controllers/about/about.controller';

var router=function ($routeProvider) {
    $routeProvider.
    when('/',
        {
            template:require('./controllers/home/index.html'),
            controller: HomeController
        }).
    when('/about',
        {
            template:require('./controllers/about/index.html'),
            controller: AboutController
        }).
    otherwise({redirectTo:'/'});
};

module.exports=router;