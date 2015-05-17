app.directive('gChart', function() {
  return {
    restrict: 'A',
    link: function($scope, elm, attrs) {
      var chart = new google.visualization.PieChart(document.getElementById('chartdiv'));
 
      chart.draw($scope.chart.data, $scope.chart.options);
    }
  };
});