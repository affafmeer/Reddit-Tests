'use strict';

describe('Controller: MainCtrl', function() {

    // load the controller's module
    beforeEach(module('myApp'));

    var MainCtrl,
        $httpBackend,
        scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        scope = $rootScope.$new();
        MainCtrl = $controller('MainCtrl', {
            $scope: scope
        });
        $httpBackend = _$httpBackend_;
    }));

    //Testing Variables
    it('should initialize the scope vars', function() {
        expect(MainCtrl.sortType).toBe('author');
        expect(MainCtrl.defaultReverse).toBe(false);
        expect(MainCtrl.isShowing).toBe(false);
    });

//Testing the getJson function
    describe('Get data from reddit', function() {

        it('It should return data from reddit', function() {

            var mockData = {
                data: {
                    children: [
                        { data: 'foo' }
                    ]
                }
            };
            $httpBackend
                .when('GET', 'https://www.reddit.com/r/worldnews/new.json').respond(
                    function() {
                        return [200, mockData, {}];
                    });

            MainCtrl.getJson();

            $httpBackend.flush();

            expect(MainCtrl.isShowing).toBeTruthy();

        });
    });
});
