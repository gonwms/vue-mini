console.log('mandraco');
new Vue({
	el: '#app',
	data: {
	  texto:'Hola',
	  style:"color: #999",
	  myLink:'http://wwww.vue.com',
	  lista:['primero', 'facundo', 'quiroga', 'cardozo']
	},
	methods:{
		upper:function(str){
			return str.toUpperCase();
		},
		clickHandler: function(event){
			event.preventDefault();
			console.log(this);
			console.log(event.target);
		
		}
	}
  });