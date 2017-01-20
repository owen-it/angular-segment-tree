'use strict';

var _template = "<style>\r\n    .st-nodes .st-node {\r\n        border-radius: 4px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .st-nodes .st-node h4 {\r\n        border: 1px solid #eee;\r\n        border-left-width: 6px;\r\n        padding: 10px;\r\n        margin: 0;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .st-nodes .st-node h4.selected {\r\n        /*background: rgba(238, 238, 238, 0.26);*/\r\n        border-bottom: 1px solid #e5e5e5;\r\n        box-shadow: -1px 3px 2px 0px rgba(0, 0, 0, 0.08);\r\n        -webkit-box-shadow: -1px 3px 2px 0px rgba(0, 0, 0, 0.08);\r\n    }\r\n\r\n    .st-nodes .st-node-container h4 {\r\n        border-top: none;\r\n    }\r\n\r\n    .st-node .st-node-container {\r\n        margin-left: 5px;\r\n        margin-right: 3px;\r\n        display: none;\r\n    }\r\n    \r\n    .st-node .st-node-content {\r\n        border-left: 1px solid #eee;\r\n        border-right: 1px solid #eee;\r\n        border-bottom: 1px solid #eee;\r\n        padding: 10px;\r\n    }\r\n\r\n    .st-node.in > .st-node-container {\r\n        display: block;\r\n    }\r\n\r\n    .st-node .st-node-icon {\r\n        color: #808080;\r\n    }\r\n\r\n    .st-node .st-node-info {\r\n        border-left-color: #1b809e !important;\r\n    }\r\n</style>\r\n\r\n<div class=\"st-nodes\">\r\n    <div class=\"st-node\" ng-class=\"{in: node.selected}\" ng-repeat=\"node in $ctrl.nodes\">\r\n        <h4 class=\"st-node-info\" ng-class=\"{selected: node.selected}\" ng-click=\"$ctrl.$selectNode(node)\">\r\n            <i ng-if=\"node[$ctrl.nodeIcon]\" class=\"{{ node[$ctrl.nodeIcon] }} st-node-icon\"></i>\r\n            {{ ::node[$ctrl.nodeLabel] }}\r\n        </h4>\r\n        <div class=\"st-node-container\">\r\n            <div class=\"st-node-content\">\r\n                <div compile-html=\"{{ node[$ctrl.nodeContent] }}\"></div>\r\n                <div ng-if=\"$ctrl.nodeTemplateUrl\" ng-include=\"$ctrl.nodeTemplateUrl\"></div>\r\n            </div>\r\n            <segment-tree ng-if=\"node[$ctrl.nodeChildren].length\" nodes=\"node[$ctrl.nodeChildren]\" node-label=\"{{ $ctrl.nodeLabel }}\" node-content=\"{{ $ctrl.nodeContent }}\" node-icon=\"{{ $ctrl.nodeIcon }}\" node-children=\"{{ $ctrl.nodeChildren }}\" node-template-url=\"{{ $ctrl.nodeTemplateUrl }}\">\r\n            </segment-tree>\r\n        </div>\r\n    </div>\r\n</div>\r\n";

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var SegmentCtrl = function () {
    function SegmentCtrl() {
        classCallCheck(this, SegmentCtrl);
    }

    createClass(SegmentCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            this.nodeLabel = this.nodeLabel || 'label';
            this.nodeContent = this.nodeContent || 'content';
            this.nodeIcon = this.nodeIcon || 'icon';
            this.nodeChildren = this.nodeChildren || 'children';
            this.nodeChildren = this.nodeChildren || 'children';
            this.nodeTemplateUrl = this.nodeTemplateUrl || undefined;
        }
    }, {
        key: '$selectNode',
        value: function $selectNode(node) {
            var _this = this;

            this.nodes.map(function (n) {
                n.selected = node[_this.nodeLabel] == n[_this.nodeLabel] && !node.selected;
            });
        }
    }]);
    return SegmentCtrl;
}();

var segment = ['segmentTree', {
    bindings: {
        nodes: '<',
        nodeId: '@?',
        nodeLabel: '@?',
        nodeChildren: '@?',
        nodeContent: '@?',
        nodeIcon: '@?',
        nodeLinks: '<?',
        nodeTemplateUrl: '@'
    },
    controller: SegmentCtrl,
    template: _template,
    transclude: true
}];

var directive = function directive($compile) {
    return {
        restrict: 'A',
        replace: true,
        link: function link($scope, $element, $attrs) {
            $element.html($compile($attrs.compileHtml)($scope));
        }
    };
};

directive.$inject = ['$compile'];

var compileHtml = ['compileHtml', directive];

angular.module('ngSegmentTree', []).component.apply(angular, segment).directive.apply(angular, compileHtml);
//# sourceMappingURL=angular-segment-tree.js.map
