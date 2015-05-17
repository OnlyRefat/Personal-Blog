app.controller('experienceCtrl', function($scope) {
  $scope.Hello="Education";
  $scope.Tabnumber='tab1';
  $scope.sscinformation=[{title:'Board', content:'Rajshai'},
  {title:'Session', content:'2006-2007'},
  {title:'School', content:'Church of God High School, Lalmonirhat'},
  {title:'Roll', content:'093009'},
  {title:'Registration', content:'883596'},
  {title:'GPA(without 4th sub)', content:'4.75'},
  {title:'GPA', content:'5.00'}
  ];

    $scope.hscinformation=[{title:'Board', content:'Dhaka'},
  {title:'Session', content:'2008-2009'},
  {title:'School', content:'Dhaka City College,Dhaka.'},
  {title:'Roll', content:'093009'},
  {title:'Registration', content:'883596'},
  {title:'GPA(without 4th sub)', content:'4.7'},
  {title:'GPA', content:'5.00'}
  ];
     $scope.varsityinformation=[{title:'Degree', content:'Bsc'},
  {title:'Dept', content:'Department of Computer Science & Engineering.'},
  {title:'Session', content:'2009-10'},
  {title:'Varsity', content:'Rajshahi Univarsity of Engineering & Technology.'},
  {title:'Roll', content:'093009'},
  {title:'Registration', content:'371'},
  {title:'CGPA', content:'3.49(Out of 4)'},
  {title:'Position', content:'13th'}
  ]
  $scope.careerInfo=[  {title:'Dhrubok Info Tech Ltd(March\'15-Present)',content:'Working as a Software Developer.'},
  {title:'Monist IT Inc(April\'14-September\'14)',content:'Worked as an Intern.'}
  ]

});


