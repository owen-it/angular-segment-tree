import segment from './src/segment.js';
import compileHtml from './src/compileHtml.js';

angular.module('ngSegmentTree', [])
    .component.apply(angular, segment)
    .directive.apply(angular, compileHtml);