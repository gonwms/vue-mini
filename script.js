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
	  showBox: true,
	},
	methods:{
		upper:function(str){
			return str.toUpperCase();
		},
		clickHandler: function(e){
			e.preventDefault();
			// alert(this);
			console.log(event.target);
		},
		toggleBox: function(){
			return this.showBox = !this.showBox;
		},
		getReference: function(e){
			e.preventDefault();
			console.log(this.$refs.reference);
		}
	}
  });
  