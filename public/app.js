
angular.module('news',[])
.component('app', {
  controller:function(){
  	 this.news=[]
  	 var x=this
  		 $.ajax({
  		 	 async:false,
             url: "https://kamel94.herokuapp.com/show",
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
      <h1 style="color:red;  
    width: 700px ;
  margin: 10  auto;
  
    width: 50%;
     font-size:450%; font-family:Times New Roman;">News viewer <div style="color: DarkGreen ; font-size:40%">The world news between your hand!</div></h1>
     <hr style="height:1px;border:none;color:#333;background-color:#333; height: 5px;" >
    <br><br><br>
    <img align="right" src='websites.png'>
     <h3 style="color:DarkGoldenRod ;
    width: 50%;
    padding: 10px; font-size:200%; font-family:Times New Roman;"> Please enter news website you would like to add:</h3> <input style="width: 40%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box; font-size:25px;" name='website' />       
      <button style="background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;"> Add News </button>
    </div>
    </form>
    <div>
    <newslist 
    array='$ctrl.news'
    />
    </div>
  `
});
