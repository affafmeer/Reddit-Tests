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
});
