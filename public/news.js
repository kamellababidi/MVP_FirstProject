angular.module('news')
.component('newss', {
  controller:function(){
    console.log('hi there')
  },
  bindings:{
  	kamel:'<'
  },
  template:`
       <div>
          <h2 style="color:blue;">The author is:{{$ctrl.kamel.author}}</h2>
          <h3 style="color:green;">Description: {{$ctrl.kamel.description}}</h4>
          <img src={{$ctrl.kamel.image}}
          style="width:500px;height:300px;">
          <br>
          ************************************************************
      </div>
  `
})