google.load('visualization', '1', {
  packages: ['corechart']
});

google.setOnLoadCallback(function() {
  angular.bootstrap(document.body, ['app']);
});

app.controller('skillCtrl', function($scope){

       var data = google.visualization.arrayToDataTable([
      ['Sector', 'Number Of Project',],
      ['C/C++', 20],
      ['Android', 4],
      ['Java', 5],
      ['NodeJs', 4],
      ['angularJs',3]
    ]);
    var options = {
      title: 'Work Done'
    };
    var chart = {};
 
    chart.data = data;
    chart.options = options;
    $scope.chart = chart;


});