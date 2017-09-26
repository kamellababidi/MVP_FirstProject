angular.module('news')
.component('newss', {
  bindings:{
  	new:'<'
  },
  template:`
       <div>
          <h3 style="color:red;">The author is:{{$ctrl.new.author}}</h3>
          <h4>Description: {{$ctrl.new.description}}</h4>
          <img src={{$ctrl.new.image}} alt="Mountain View" style="width:304px;height:228px;">
          ************************************************************
      </div>
  `
})