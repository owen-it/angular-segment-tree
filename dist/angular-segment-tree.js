'use strict';

var _template = "<style>\r\n    .st-nodes .st-node {\r\n        border-radius: 4px;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .st-nodes .st-node h4 {\r\n        border: 1px solid #eee;\r\n        border-left-width: 6px;\r\n        padding: 10px;\r\n        margin: 0;\r\n        cursor: pointer;\r\n    }\r\n\r\n    .st-nodes .st-node-container h4 {\r\n        border-top: none;\r\n    }\r\n\r\n    .st-node .st-node-container {\r\n        margin-left: 5px;\r\n        display: none;\r\n    }\r\n    \r\n    .st-node .st-node-content {\r\n        border-left: 1px solid #eee;\r\n        border-right: 1px solid #eee;\r\n        border-bottom: 1px solid #eee;\r\n        padding: 10px;\r\n    }\r\n\r\n    .st-node.in > .st-node-container {\r\n        display: block;\r\n    }\r\n\r\n    .st-node .st-node-icon {\r\n        color: #808080;\r\n    }\r\n\r\n    .st-node .st-node-info {\r\n        border-left-color: #1b809e !important;\r\n    }\r\n\r\n    .st-node .st-node-segment {\r\n    }\r\n</style>\r\n\r\n<div class=\"st-nodes\">\r\n    <i>teste</i>\r\n    <div class=\"st-node in\" ng-repeat=\"node in [1, 2, 3]\">\r\n        <h4 class=\"st-node-info\">\r\n            <i class=\"fa fa-balance-scale st-node-icon\"></i>\r\n            Atos Normativos\r\n        </h4>\r\n        <div class=\"st-node-container\">\r\n            <div class=\"st-node-content\">\r\n                <p>\r\n                    Lorem ipsum dolor sit amet.\r\n                </p>\r\n                <a href=\"\" class=\"btn btn-default\">\r\n                    <i class=\"fa fa-file-o\"></i> Material didático 1\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>";

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

        console.log('constructor', this);
    }

    createClass(SegmentCtrl, [{
        key: '$onInit',
        value: function $onInit() {
            console.log('$oninit', this.nodes);
        }
    }]);
    return SegmentCtrl;
}();

var segment = ['segmentTree', {
    bindings: {
        nodes: '<',
        nodeId: '=',
        nodeLabel: '=',
        nodeChildren: '=',
        nodeContent: '=',
        nodeLinks: '='
    },
    controller: SegmentCtrl,
    template: _template
}];

angular.module('ngSegmentTree', []).component.apply(angular, segment);
//# sourceMappingURL=angular-segment-tree.js.map
