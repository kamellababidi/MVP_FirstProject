
angular.module('news',[])
.component('app', {
  controller:function(){
  	 this.news=[]
  	 var x=this
  		 $.ajax({
  		 	 async:false,
             url: "http://127.0.0.1:8000/show",
              cache: false,
              dataType: 'json',
              success: function(data){
    			x.news=data
    			console.log(x.news);

            }
            })
  	   
  		    this.click=function(){
  			//console.log(this.news);
   		    }
   		//console.log(this.news)
  },
  template:`
      <form action="/add" method="post">
      <div>
      <h1>News viewer</h1>
      <h4>{{$ctrl.samer}}</h4>
      Please enter news website you would like to add: <input name='website' />       
      <button > Add News </button>
    </div>
    </form>
     
    <div>
    <newslist 
    click='$ctrl.click.bind($ctrl)'
    news='$ctrl.news'
    />
    </div>
  `
});
