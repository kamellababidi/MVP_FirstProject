angular.module('news')
.component('newslist', {
	controller:function(){
	},
  bindings:{
  	click:'<',
  	news:'<'
  },
  template:`
       <div>
      <button ng-click='$ctrl.click()'> Show News </button>
      </div> 
      <div>
 	<newss 
 	new='$ctrl.news[0]'
 	/>
      </div>
  `
})