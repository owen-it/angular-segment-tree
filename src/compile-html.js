var directive = ($compile) => {
    return {
        restrict: 'A',
        replace: true,
        link: ($scope, $element, $attrs) => {
            $element.html($compile(
                $attrs.compileHtml
            )($scope));
        }
    }
}

directive.$inject = ['$compile'];

export default ['compileHtml', directive];
