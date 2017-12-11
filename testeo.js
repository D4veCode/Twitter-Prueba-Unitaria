const chai = require('chai');
const assert = chai.assert;
const Twitter = require('twitter');
const config = require('./config');

//inicializacion
before(function(){
  const cliente = new Twitter(config);
});

//prueba
describe('Probar Twitter API', function(){

    it('prueba que retorna y compara un usuario de Twitter', function(done){
      beforeEach(function(){
        var username = 'DavidWrote';
      });
      cliente.get('users/show',{screen_name: username},function(err,data,response){
        assert.equal(data.screen_name,username,'Prueba pasada.');
        if(err) console.log(err);
        else{
          done(data);
          console.log(data.screen_name);
        }  
      });
    });
});

//finalizacion
after(function(){
  cliente = null;
})
