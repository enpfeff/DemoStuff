// pros:
//	all of our code for this directive is in one spot
//	easily can update via mdl's component handler	
//
// cons:
//	We have to do our own bug work fixing manipulating 
//	We have to write the more complicated ones like dropdown, tabs, etc etc
//

angular.module('Mdl.Button').directive('tvlMenuButton', [function(TvlMdlConfig){
    return {
        restrict: 'E',
        replace: true,
        template: '<button class="tvl-menu-button mdl-js-button" id="{{id}}" ng-class="ngClass" ng-transclude></button>',
        scope: {
            ngModel: '=',
            id: '@menuId'
        },
        transclude: true,
        link: function($scope, el, $attrs) {
            $scope.ngClass = {
                'mdl-js-ripple-effect': TvlMdlConfig.rippleEffect
            };

            if (TvlMdlConfig.rippleEffect) {
                componentHandler.upgradeElement(el[0], 'MaterialRipple');
            }
            componentHandler.upgradeElement(el[0], 'MaterialButton');

        }

    };
}]);
