app.directive('gChart', function() {
  return {
    restrict: 'A',
    link: function($scope, elm, attrs) {
      var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
 
      chart.draw($scope.chart.data, $scope.chart.options);
    }
  };
})
.directive('modal', function () {
    return {
      template: '<div class="modal fade">' + 
          '<div class="modal-dialog">' + 
            '<div class="modal-content">' + 
              '<div class="modal-header text-center">' + 
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' + 
                '<h4 class="modal-title">{{ title }}</h4>' + 
              '</div>' + 
              '<div class="modal-body text-center" ng-transclude></div>' + 
            '</div>' + 
          '</div>' + 
        '</div>',
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;

        scope.$watch(attrs.visible, function(value){
          if(value == true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });

        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });

        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  })

.directive('myStyle', function ()
{
  return {
    restrict: 'A',
    link: function (scope, element, attrs)
    {
      element.bind('mouseenter', function ()
      {
       element.css("box-shadow", "10px 10px 5px #888888");
     });
      element.bind('mouseleave', function ()
      {
        
        element.css("box-shadow","none");
      });
    }
  }
});