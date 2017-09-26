angular.module('news')
.component('newslist', {
	controller:function(){
	},
  bindings:{
  	array:'<'
  },
  template:`
      <div>
 	<newss
 		kamel="kamel"
 	 ng-repeat="kamel in $ctrl.array"/>
      </div>
  `
})