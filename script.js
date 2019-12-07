      function conversorMoeda() {
        var inputMoeda = document.getElementById("moeda").value;
        var de = document.getElementById("moedaDe").value;
        var para = document.getElementById("moedaPara").value;
        var resultado;
        
        if( de == para){
          resultado = inputMoeda /1.0;
        }
        else if( de == "Real"){
          if(para == "Dolar"){
            resultado = inputMoeda / 4.23;
          }
          if(para == "Euro"){
            resultado = inputMoeda / 4.67;
          }
        }
       
        else if( de == "Dolar"){
          if(para == "Real"){
            resultado = inputMoeda * 4.23;
          }
          if(para == "Euro"){
            resultado = inputMoeda * 0.91;
          }
        }
        else if( de == "Euro"){
          if(para == "Real"){
            resultado = inputMoeda * 4.67;
          }
          if(para == "Dolar"){
            resultado = inputMoeda / 0.91;
          }
        }
      
        document.getElementById("resultadoMoeda").innerHTML = resultado.toFixed(2);
      }
    </script>
    <script>
      function conversorComprimento() {
        var inputComprimento = document.getElementById("comprimento").value;
        var de = document.getElementById("deComprimento").value;
        var para = document.getElementById("paraComprimento").value;
        var resultado;
        
        if( de == para){
          resultado = inputComprimento /1.0;
        }
        else if( de == "Metro"){
          if(para == "Centimetro"){
            resultado = inputComprimento *100;
          }
          if(para == "Milimetro"){
            resultado = inputComprimento * 1000;
          }
        }
       
        else if( de == "Centimetro"){
          if(para == "Metro"){
            resultado = inputComprimento / 100.0;
          }
          if(para == "Milimetro"){
            resultado = inputComprimento * 10;
          }
        }
        else if( de == "Milimetro"){
          if(para == "Metro"){
            resultado = inputComprimento / 1000.0;
          }
          if(para == "Centimetro"){
            resultado = inputComprimento * 10;
          }
        }
      
        document.getElementById("resultadoComprimento").innerHTML = resultado.toFixed(2);
      }
    </script>
    <script> 
      function conversorTemperatura() {
        var inputTemperatura = document.getElementById("temperatura").value;
        var de = document.getElementById("deTemperatura").value;
        var para = document.getElementById("paraTemperatura").value;
        var resultado;
        
        if( de == para){
          resultado = inputTemperatura / 1.0;
        }
        else if( de == "Celcius"){
          if(para == "Fahrenheit"){
            resultado = ((inputTemperatura / 5.0 ) * 9) + 32;
          }
          if(para == "Kelvin"){
            resultado = inputTemperatura/1.0 + 273.15;
          }
        }
       
        else if( de == "Fahrenheit"){
          if(para == "Celcius"){
            resultado = ((inputTemperatura - 32 )/ 9.0) * 5;
          }
          if(para == "Kelvin"){
            resultado = (((inputTemperatura - 32 )/ 9.0) * 5) + 273.15;
          }
        }
        else if( de == "Kelvin"){
          if(para == "Celcius"){
            resultado = inputTemperatura/1.0 - 273.15;
          }
          if(para == "Fahrenheit"){
            resultado = (((inputTemperatura - 273.15) * 9 ) / 5.0) + 32;
          }
        }
      
        document.getElementById("resultadoTemperatura").innerHTML = resultado.toFixed(2);
      }