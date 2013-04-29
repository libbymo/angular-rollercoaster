Rollercoaster.controller('StickerChartCtrl', function ($scope, $location) {
	$scope.users = [
		{ 
			// id: 1,
			name: "Libby",
			stars: [
				{
					task_name: "Potty",
					counter: 1
				},
				{
					task_name: "Used Manners",
					counter: 3
				}
			]
		},
		{ 
			// id: 2,
			name: "Lily",
			stars: [
				{
					task_name: "No Binky",
					counter: 2
				}
			]
		},
		{ 
			// id: 3,
			name: "Nathan",
			stars: [
				{
					task_name: "Used Manners",
					counter: 4
				}
			]
		}
	];
	
	$scope.showStar = function( counter) {
		var stickers = "";
		for( var i=0; i< counter; i++ ) {
			stickers += "<p class='sticker'></p>";
		}
		
		return stickers;
		
	};
	
	$scope.addUser = function() {
		$scope.users.push( { name: $scope.user} );
		$scope.user = "";
	};
	
	$scope.addStar = function() {		
		
		// TO DO:
		// Consistently name star or sticker. Pick one.
		// Make this not look like ass.
		// Get validation working on empty submissions - undefined checks need to happen before assignment.
		// Work in ID to uniquely set users.
		// Work / add to a set stars array? So that they aren't remade in multiple places.
		
		var selectedObject 	= $scope.selectedName || '';
		var selectedName 		= $scope.selectedName.name || '';
		var taskName 				= $scope.taskName ||'';
		

		
		// if no task or person was entered - this needs to happen above before variables are used/set.
		// if( taskName === "undefined" || selectedName === "undefined" ) {  
		// 
		// 	// To do: put this on the page.
		// 	conosle.log('please enter a task and/or name')
		// 	
		// // if the stars object exists, check if the star is there, and just increase counter.
		// } else 
		
		if( typeof selectedObject.stars !== 'undefined' && selectedObject.stars instanceof Array ) {

			// find the object that contains the taskName.
			var obj = _.find(selectedObject.stars, function(obj) { return obj.task_name === taskName })
			
			// if the task_name doesn't exist - create it.			
			if( _.isEmpty(obj) ) {
				selectedObject.stars.push({ task_name: taskName, counter: 1})

			} else {
				// just increment the counter
				obj.counter += 1;
				
			}
			
		// if the stars object doesn't exist create it
		} else {
			
			var new_star = new Array();
			new_star.push( { task_name: taskName, counter: 1 });
			selectedObject.stars = new_star;
						
		}
		
		// clear input
		starName = "";
		
	}
});


Rollercoaster.controller('WelcomeCtrl', function ($scope, $location) {
  
  $scope.prettyModels = [];
  
  $scope.navMe = function() {
    $location.url('/goodbye');
  }
  
  $scope.submitMe = function() {
    $scope.prettyModels.push( $scope.PrettyModel );
    console.log( $scope.prettyModels );
  }
  
});

Rollercoaster.controller('GoodbyeCtrl', function ($scope, $location) {
  $scope.step = 0;
  
  $scope.isShown = function() {
    return $scope.step; // boolean
  }
  
  $scope.toggleMe = function( step ) {
    console.log(step);
    $scope.step = step;
  }
  
});

Rollercoaster.controller('TodoCtrl', function($scope, $location) {
	
	$scope.todos = [
		{"text": "Learn Angular", "done": false},
		{"text": "Write an App", "done": false},
		{"text": "Get it into Github", "done": false}
	];
	
	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	};
	
	// replace this with angular native remaining()
	$scope.getRemainingTodos = function() {
		return _.filter($scope.todos, function(todo) {
			return todo.done === false;
		}).length;		
	};
	
	$scope.clearCompleted = function() {
		$scope.todos = _.filter($scope.todos, function(todo) {
			return todo.done === false;
		});
	};
	
	$scope.addTodo = function() {
		$scope.todos.push( {"text": $scope.todo, "done": false } );
		$scope.todo = "";
	};
	
});

Rollercoaster.directive('coasterCar', function() {
	return {
		restrict: "E",
		template: "<div> Here I am to save the day!</div>"
	}
});


