/**
 * Created by Corning on 2016/6/23.
 */
describe('Home Controller',function () {
    it('should myData has hello value',function () {
        var homeController=require('.././home/home.controller');
        var scope={};
        var ctrl=new homeController(scope);
        expect(scope.myData.hello).toBe('hello...');
    })
});