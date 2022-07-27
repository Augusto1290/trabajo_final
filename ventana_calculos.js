'use strict'



const li =document.querySelectorAll('.li')
const bloque =document.querySelectorAll('.bloque')

li.forEach( ( cadaLi ,i) =>{

    li[i].addEventListener('click',()=>{
        
        li.forEach(( cadaLi ,i) =>{

            li[i].classList.remove('activo')

            bloque[i].classList.remove('activo')
        })
        
        li[i].classList.add('activo')
        bloque[i].classList.add('activo')
    })
})

function mermas(){
    var kg=parseFloat(document.getElementById('kilogramos').value);
    var hum=parseFloat(document.getElementById('humedad').value);
    var opcion=(document.getElementById('selector').value);
    var mermaxhumedadk;
    var mermaxmanipuleo;
    var mermaxhumedad;
    var mermaxmanipuleok;
    var mermaxhumedadk;
    var mermaxmanipuleok;
    var mermaaaplicark;
    var mermaaaplicarkn;
    var mermavolatil_por;
    var mermavolatil_k;
    var mermavolatil_kn;
    var resultado_merma_manipuleo_kilos=document.getElementById('resultado_merma_manipuleo_kilos');
    var res_merma_por_humedad=document.getElementById('res');
    var resultado_merma_manipuleo=document.getElementById('resultado_merma_manipuleo');
    var res_merma_hum_kilos=document.getElementById('res_merma_hum_kilos');
    var resultado_merma_aplicar_kilos=document.getElementById('resultado_merma_aplicar_kilos');
    var resultado_merma_aplicar_kn=document.getElementById('resultado_merma_aplicar_kn');
    var  resultado_mermavolatil=document.getElementById('resultado_mermavolatil')
    var resultado_merma_volatil_kilos=document.getElementById('resultado_merma_volatil_kilos');
    var resultado_merma_volatil_kn=document.getElementById('resultado_merma_volatil_kn');

    if (opcion==1 && hum> 14.5) {

         mermaxhumedad = (((hum - 13.5) / (100 - 13.5) * 100));
        res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
        mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;

        mermaxhumedadk = ((kg * mermaxhumedad) / 100);
        res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));

        mermaxmanipuleo = 0.25;
        resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
    
        mermaxmanipuleok = ((kg * 0.25) / 100);
        resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
        mermaxmanipuleok = Math.round(mermaxmanipuleok);

        mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
        resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));

        mermaaaplicarkn = (kg - mermaaaplicark);
        resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

        mermavolatil_por = 0.30;
        resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);

        mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
        resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
        mermavolatil_k = Math.round(mermavolatil_k);

        mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
        resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}

       else {
        if (opcion==1 && hum <= 14.50 && hum > 0) {
            alert("Humedad dentro de la tolerancia admitida, se considera maíz húmedo a valores superiores a 14.5");}}

     
    if (opcion==2 && hum> 13.5) {

        mermaxhumedad = (((hum - 13.0) / (100 - 13.0) * 100));
       res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
       mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;

       mermaxhumedadk = ((kg * mermaxhumedad) / 100);
       res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));

       mermaxmanipuleo = 0.25;
       resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
   
       mermaxmanipuleok = ((kg * 0.25) / 100);
       resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
       mermaxmanipuleok = Math.round(mermaxmanipuleok);

       mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
       resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));

       mermaaaplicarkn = (kg - mermaaaplicark);
       resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

       mermavolatil_por = 0.50;
       resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);

       mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
       resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
       mermavolatil_k = Math.round(mermavolatil_k);

       mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
       resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}

      else {
       if (opcion==2 && hum <= 13.50 && hum > 0) {
           alert("Humedad dentro de la tolerancia admitida, se considera soja húmeda a valores superiores a 13.5");}}

    
           if (opcion==3 && hum> 14.0) {

            mermaxhumedad = (((hum - 13.5) / (100 - 13.5) * 100));
           res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
           mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;
   
           mermaxhumedadk = ((kg * mermaxhumedad) / 100);
           res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));
   
           mermaxmanipuleo = 0.1;
           resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
       
           mermaxmanipuleok = ((kg * 0.1) / 100);
           resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
           mermaxmanipuleok = Math.round(mermaxmanipuleok);
   
           mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
           resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));
   
           mermaaaplicarkn = (kg - mermaaaplicark);
           resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));
   
           mermavolatil_por = 0.30;
           resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);
   
           mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
           resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
           mermavolatil_k = Math.round(mermavolatil_k);
   
           mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
           resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}
   
          else {
           if (opcion==3 && hum <= 14.50 && hum > 0) {
               alert("Humedad dentro de la tolerancia admitida, se considera trigo húmedo a valores superiores a 14.0");}}

        
    if (opcion==4 && hum> 15.0) {

        mermaxhumedad = (((hum - 13.5) / (100 - 13.5) * 100));
       res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
       mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;

       mermaxhumedadk = ((kg * mermaxhumedad) / 100);
       res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));

       mermaxmanipuleo = 0.25;
       resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
   
       mermaxmanipuleok = ((kg * 0.25) / 100);
       resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
       mermaxmanipuleok = Math.round(mermaxmanipuleok);

       mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
       resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));

       mermaaaplicarkn = (kg - mermaaaplicark);
       resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

       mermavolatil_por = 0.50;
       resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);

       mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
       resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
       mermavolatil_k = Math.round(mermavolatil_k);

       mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
       resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}

      else {
       if (opcion==4 && hum <= 15.0 && hum > 0) {
           alert("Humedad dentro de la tolerancia admitida, se considera sorgo húmedo a valores superiores a 15.0");}}

    
        
    if (opcion==5 && hum> 12.5) {

        mermaxhumedad = (((hum - 12.0) / (100 - 12.0) * 100));
       res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
       mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;

       mermaxhumedadk = ((kg * mermaxhumedad) / 100);
       res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));

       mermaxmanipuleo = 0.20;
       resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
   
       mermaxmanipuleok = ((kg * 0.20) / 100);
       resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
       mermaxmanipuleok = Math.round(mermaxmanipuleok);

       mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
       resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));

       mermaaaplicarkn = (kg - mermaaaplicark);
       resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

       mermavolatil_por = 0.30;
       resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);

       mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
       resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
       mermavolatil_k = Math.round(mermavolatil_k);

       mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
       resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}

      else {
       if (opcion==5 && hum <= 12.50 && hum > 0) {
           alert("Humedad dentro de la tolerancia admitida, se considera cebada húmeda a valores superiores a 12.5");}}

    
           if (opcion==6 && hum> 14.0) {

            mermaxhumedad = (((hum - 13.5) / (100 - 13.5) * 100));
           res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
           mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;
   
           mermaxhumedadk = ((kg * mermaxhumedad) / 100);
           res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));
   
           mermaxmanipuleo = 0.20;
           resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
       
           mermaxmanipuleok = ((kg * 0.20) / 100);
           resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
           mermaxmanipuleok = Math.round(mermaxmanipuleok);
   
           mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
           resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));
   
           mermaaaplicarkn = (kg - mermaaaplicark);
           resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));
   
           mermavolatil_por = 0.30;
           resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);
   
           mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
           resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
           mermavolatil_k = Math.round(mermavolatil_k);
   
           mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
           resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));}
   
          else {
           if (opcion==6 && hum <= 14.0 && hum > 0) {
               window.alert("Humedad dentro de la tolerancia admitida, se considera cebada húmeda a valores superiores a 14.0");}}



               if (opcion==7 && hum> 9.0) {
     
                mermaxhumedad = (((hum - 8.5) / (100 - 8.5) * 100));
               res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
               mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;
       
               mermaxhumedadk = ((kg * mermaxhumedad) / 100);
               res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));
       
               mermaxmanipuleo = 0.25;
               resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
           
               mermaxmanipuleok = ((kg * 0.25) / 100);
               resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
               mermaxmanipuleok = Math.round(mermaxmanipuleok);
       
               mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
               resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));
       
               mermaaaplicarkn = (kg - mermaaaplicark);
               resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

               resultado_mermavolatil.innerHTML="";
                               
                    
               resultado_merma_volatil_kilos.innerHTML="";
               
        
               
               resultado_merma_volatil_kn.innerHTML="";}
       
              else {
               if (opcion==7 && hum <= 9.0 && hum > 0) {
                   alert("Humedad dentro de la tolerancia admitida, se considera maní húmedo a valores superiores a 9.0");}}

            
     
                    if (opcion==8 && hum> 11.0) {
          
                     mermaxhumedad = (((hum - 10.5) / (100 - 10.5) * 100));
                    res_merma_por_humedad.innerHTML=(mermaxhumedad).toFixed(2);
                    mermaxhumedad = Math.round(mermaxhumedad * 100.0) / 100.0;
            
                    mermaxhumedadk = ((kg * mermaxhumedad) / 100);
                    res_merma_hum_kilos.innerHTML=Math.round((mermaxhumedadk));
            
                    mermaxmanipuleo = 0.20;
                    resultado_merma_manipuleo.innerHTML=(mermaxmanipuleo);
                
                    mermaxmanipuleok = ((kg * 0.20) / 100);
                    resultado_merma_manipuleo_kilos.innerHTML=( Math.round(mermaxmanipuleok));
                    mermaxmanipuleok = Math.round(mermaxmanipuleok);
            
                    mermaaaplicark = (mermaxhumedadk + mermaxmanipuleok);
                    resultado_merma_aplicar_kilos.innerHTML=( Math.round(mermaaaplicark));
            
                    mermaaaplicarkn = (kg - mermaaaplicark);
                    resultado_merma_aplicar_kn.innerHTML=(Math.round(mermaaaplicarkn));

                    mermavolatil_por = 0.50;
                    resultado_mermavolatil.innerHTML=(mermavolatil_por).toFixed(2);
            
                    mermavolatil_k = ((mermaaaplicarkn * 0.30) / 100);
                    resultado_merma_volatil_kilos.innerHTML=(Math.round(mermavolatil_k));
                    mermavolatil_k = Math.round(mermavolatil_k);

                    mermavolatil_kn = (mermaaaplicarkn - mermavolatil_k);
                    resultado_merma_volatil_kn.innerHTML=(Math.round(mermavolatil_kn));
            }
            
                   else {
                    if (opcion==8 && hum <= 11.0 && hum > 0) {
                        alert("Humedad dentro de la tolerancia admitida, se considera girasol húmedo a valores superiores a 14.5");}}}


        
        function fun_merma_volatil(){

            
            
            if (document.getElementById('checkbox').checked)
            {
                document.getElementById('m_v').style.opacity="1"
              
            }
            else{
                document.getElementById('m_v').style.opacity="0"
              
            }

        }


        
      function con(){
        var pro=parseFloat(document.getElementById('pro').value);
        var hum_con=parseFloat(document.getElementById('humedad_con').value);
        var sss;
        var bh;
        var resultado_con=document.getElementById('resultado_con');

        if (document.getElementById('radio1').checked) {
            sss = ((pro * 100) / (100 - hum_con));
            resultado_con.innerHTML=(sss).toFixed(2);
    
        }else{
            if(document.getElementById('radio2').checked) {
                bh = ((100 - hum_con) * ((pro) / 100));
                resultado_con.innerHTML=(bh).toFixed(2);
        }     
                        
                
    }                         
      }


        function ph_f(){
            var ph=parseFloat(document.getElementById('ph').value);
            var hum_ph=parseFloat(document.getElementById('humedad_ph').value);
            var res_ph;
            var resultado=document.getElementById('resultado_ph');


            if (ph > 0 && hum_ph<=14.5)
            {res_ph = (ph * 0.4);
            if (res_ph >= 75)
            {resultado.innerHTML=((res_ph).toFixed(2)+ " G1");
            }else
            if (res_ph < 75 && res_ph >= 72){
            resultado.innerHTML=((res_ph).toFixed(2)+ " G2");
            }else
            if (res_ph < 72 && res_ph >= 69){
            resultado.innerHTML=((res_ph).toFixed(2) + " G3");
            }
            else
            if(res_ph<69)
            {resultado.innerHTML=((res_ph).toFixed(2) + " F.G");}}

            
            if (ph>0 && hum_ph > 14.5)
            {res_ph = ((ph * 0.4)+((hum_ph-14.5)*0.35));
            if (res_ph >= 75)
            {resultado.innerHTML=((res_ph).toFixed(2)+ " G1");
            }else   
            if (res_ph < 75 && res_ph >= 72)
            {resultado.innerHTML=((res_ph).toFixed(2) + " G2");
            }else
            if (res_ph < 72 && res_ph >= 69)
            { resultado.innerHTML=((res_ph).toFixed(2) + " G3");
            }else
            if(res_ph<69)
            {resultado.innerHTML=((res_ph).toFixed(2) + " F.G");}}

            
                                         
      }



   
 
    
    

        
    

        

    


            



    

 
                                

         
              

             
                 
                       
