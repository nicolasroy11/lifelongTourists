angular.module('app').controller('tripQueryCtrl', 
['$scope', '$http', '$sessionStorage', '$state',
function($scope, $http, $sessionStorage, $state)
	{
		void 0;
		var model = $state.current.model;
		void 0;
		var refresh = function()
		{
			$http.get('/list/trip')
			.then(function(response)
			{
				void 0;
				void 0;
				$scope.list = response.data;
				$scope.item = '';
			});
		};
		refresh();


		$scope.add = function()
		{
			void 0;
			$http.post('/list', {"item": model, "data": $scope.item})
			.then(function(response)
			{
				void 0;
				sessionStorage.setItem('userID', response.data._id);
				refresh();
			});
		}

		$scope.remove = function(id)
		{
			void 0;
			$http.delete('/list/' + model + '/' + id)
			.then(function(response)
			{
				refresh();
			});
		}

		$scope.edit = function(id)
		{
			void 0;
			$http.get('/list/' + model + '/' + id)
			.then(function(response)
			{
				$scope.item = response.data;
				void 0;
				void 0;
			});
		}

		$scope.update = function()
		{
			void 0;
			$http.put('/list/' + model + '/' + $scope.item._id, $scope.item)
			.then(function(response)
			{
				void 0;
				refresh();
			});
		}


			}]);