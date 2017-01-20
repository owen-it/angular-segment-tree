# angular-segment-tree

### Example

```javascript
.controller('DocsController', ['$scope', function($scope){

    $scope.nodes = [
        {
            label: 'Webpack'
            icon: 'fa fa-cube',
            content: '<p>webpack is a tool to build JavaScript modules...',
            children: [
                label: 'Creating a bundle',
                icon: 'fa fa-code',
                content: '<p>Create a demo directory...'
                children: []
            ]
        },
        {
            label: 'Rollup',
            icon: 'fa fa-cube',
            content: '<p>Rollup is a next-generation JavaScript module...'
            children: []
        }
    ]

}])
```

```html
<segment-tree nodes="nodes"><segment-tree>
```



![](/assets/2017-01-20_08h19_23.png)

