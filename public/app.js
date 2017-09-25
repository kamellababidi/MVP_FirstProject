angular.module('news',[])

.component('app', {
  // TODO

  controller:function(){
  	
  },
  template:`
      <form action="/add" method="post">
      <div>
      <h1>News viewer</h1>
      Please enter news website you would like to add: <input name='website' value=''/>       
      <button > Add News </button>
    </div>
    </form>
    <form action="/show" method="get">
      <div>
      <button > Show News </button>
    </div>
    </form>
  `
});
