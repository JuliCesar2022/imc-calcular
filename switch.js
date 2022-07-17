

function calcular(){
    
    peso = parseInt( document.getElementById('peso').value  ) 
    estatura = parseFloat(   document.getElementById('altura').value  )



    imc = peso / (estatura**2)

    document.getElementById('resultado').innerHTML = imc

    if (imc<18.4) {

        document.getElementById('mensaje').innerHTML = "usded esta en estado de desnutricion"

    } 
    else if(imc>= 18.5 && imc <= 24.9) {
        document.getElementById('mensaje').innerHTML ="usted esta en estado normal"
        

    }else  if (imc >=25 && imc <= 29.9) {
        document.getElementById('mensaje').innerHTML ="usded esta en estado de sobrepeso"
    
    } 
    else if(imc>= 30 && imc <= 34.9) {
        document.getElementById('mensaje').innerHTML ="usted esta en estado de obesidad I"
     

    }else if (imc >=35 && imc <= 39.9) {
        document.getElementById('mensaje').innerHTML ="usded esta en estado de obesidad II"
   
    } 
    else if(imc>=40) {
        document.getElementById('mensaje').innerHTML ="usted esta en estado obesidad III"
       
    }

    if (imc>= 18.5 && imc <= 24.9 ){
        document.getElementById('imagen').src = "https://th.bing.com/th/id/OIP.9F4IHbgeBjp38onll5FjkQHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    }else{
        document.getElementById('imagen').src = "https://th.bing.com/th/id/OIP.Gj_Df3otG0bVFI3U5STw1AHaD4?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    }


    //https://th.bing.com/th/id/OIP.9F4IHbgeBjp38onll5FjkQHaHa?w=174&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7


    //https://th.bing.com/th/id/OIP.Gj_Df3otG0bVFI3U5STw1AHaD4?w=285&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7

}

