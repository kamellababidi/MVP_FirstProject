angular.module('news',[])

.component('app', {
  // TODO
  controller:function(){
  		this.news=[]
  		this.click=function(){
  			$.ajax({
                 url: "http://127.0.0.1:8000/show",
                 cache: false,
                  success: function(data){
         				this.news=data
         				console.log(this.news)
                  }
            })
   		}
   		console.log(this.news)
  },
  template:`
      <form action="/add" method="post">
      <div>
      <h1>News viewer</h1>
      Please enter news website you would like to add: <input name='website' value=''/>       
      <button > Add News </button>
    </div>
    </form>
      <div>
      <button ng-click='$ctrl.click()'> Show News </button>
    </div>
  `
});
