import _template from './templates/node.html';

class SegmentCtrl
{
    constructor() {
    }
    
    $onInit() {
      
        this.nodeLabel = this.nodeLabel || 'label';
        this.nodeContent = this.nodeContent || 'content';
        this.nodeIcon = this.nodeIcon || 'icon';
        this.nodeChildren = this.nodeChildren || 'children';
        
    }
    
    selectNode(node){
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
        nodeLinks: '<?'   
    },
    controller: SegmentCtrl,
    template: _template
}];
