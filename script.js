/*jshint -W093*/

Vue.component('lalala',{
	data: function(){
		return {
			mensaje: 'eran los de luego',
		};
	},
	template: '	<h3>Componentes {{mensaje}}</h3>'
});

new Vue({
	el: '#app',
	data: {
	  texto:'Hola',
	  style:"color: #999",
	  myLink:'http://wwww.vue.com',
	  lista:['Primero', 'Facundo', 'Quiroga', 'Cardozo'],
	  redat: true,
	},
	methods:{
		upper:function(str){
			return str.toUpperCase();
		},
		clickHandler: function(event){
			event.preventDefault();
			// alert(this);
			console.log(event.target);
		},
		colorChanger: function(){
			return this.redat = !this.redat;
		}
	}
  });
  