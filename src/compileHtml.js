var directive = ($compile) => {
    return {
        restrict: 'A',
        scope: { compileHtml: '=' },
        replace: true,
        link: ($scope, $element) => {
            $element.html($compile(
                $scope.compileHtml
            )($compile));
        }
    }
}

directive.$inject = ['$compile'];

export default ['compileHtml', directive];