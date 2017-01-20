import _template from './templates/node.html';

class SegmentCtrl
{
    $onInit() 
    {
        this.nodeLabel = this.nodeLabel || 'label';
        this.nodeContent = this.nodeContent || 'content';
        this.nodeIcon = this.nodeIcon || 'icon';
        this.nodeChildren = this.nodeChildren || 'children';
        this.nodeChildren = this.nodeChildren || 'children';
        this.nodeTemplateUrl = this.nodeTemplateUrl || undefined;
    }

    $selectNode(node){
        this.nodes.map(( n ) => {
            n.selected = (node[this.nodeLabel] == n[this.nodeLabel]) && !node.selected;
        });
    }
}

export default ['segmentTree', {
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
