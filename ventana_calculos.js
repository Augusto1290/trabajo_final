'use strict'


document.getElementById('m_v').style.visibility="collapse"
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
                document.getElementById('m_v').style.visibility="visible"
                document.getElementById('m_v').style.opacity="1"             
            }
            else{
                document.getElementById('m_v').style.visibility="collapse"
              
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



  

    
const c_cd=document.getElementById("co_cd");
const c_cb=document.getElementById("co_cb");
const c_vd=document.getElementById("co_vd");
const c_vb=document.getElementById("co_vb");
const fecha=document.getElementById("fecha");
const cB_cd=document.getElementById("coB_cd");
const cB_cb=document.getElementById("coB_cb");
const cB_vd=document.getElementById("coB_vd");
const cB_vb=document.getElementById("coB_vb");
const fechab=document.getElementById("fechab");
const co_ma=document.getElementById("co_ma");
const co_tr=document.getElementById("co_tr");
const co_gi=document.getElementById("co_gi");
const co_so=document.getElementById("co_so");
const co_sor=document.getElementById("co_sor");
const co_ma2=document.getElementById("co_ma2");
const co_tr2=document.getElementById("co_tr2");
const co_gi2=document.getElementById("co_gi2");
const co_so2=document.getElementById("co_so2");
const co_sor2=document.getElementById("co_sor2");
const co_mar2=document.getElementById("co_mar2");
const co_trr2=document.getElementById("co_trr2");
const co_gir2=document.getElementById("co_gir2");
const co_sore2=document.getElementById("co_sore2");
const co_sorr2=document.getElementById("co_sorr2");
const precios_pizarra=document.getElementById("precios_pizarra");


const fechaDeManana = () => {
    let hoy = new Date();
    let DIA_EN_MILISEGUNDOS = 24 * 60 * 60 * 1000;
    let manana = new Date(hoy.getTime() - DIA_EN_MILISEGUNDOS);
    return manana;
};
var fayer=fechaDeManana();
var fayer2=fayer.toISOString().slice(0, 10)
console.log(fayer2)
  
  
  
  fetch('https://api.bcr.com.ar/gix/v1.0/Login', {
    method: 'POST',
    headers: {
        'api_key': '4891BD99-980E-ED11-9435-00155D09A733',
        'secret': '719fc1f72eb2952ac44b9f22781812f89d14d4815909331f014bed35a99fb3f7'
    },
  })
  .then(response => response.json())
  .then(data=>{ console.log(data)
        const miToken=(data.data.token)
        console.log(miToken);
    
const myHeader = new Headers({
    'Authorization': miToken});

const myInit = { 
    method: 'GET',
    headers: myHeader,
    mode: 'cors',     
    cache: 'default'    
};


const myrequest = new Request('https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=2&fechaConcertacionDesde='+fayer2+'&fechaConcertacionHasta='+fayer2,myInit);
fetch(myrequest)
.then(response => response.json())
.then(data => {console.log(data);


    var fecha=new Date(data.data[0].fecha_Operacion_Pizarra)

    precios_pizarra.textContent="Precios Pizarra del dia "+fecha.toLocaleDateString();
    
    if(data.data[0].esEstimado_Cotizacion==false)
    {
       
        co_ma.textContent="$"+(data.data[0].precio_Cotizacion)
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_mar2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_mar2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_mar2.textContent="TEND 🟰"
        }
    }
    else
    {
        
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_mar2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_mar2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_mar2.textContent="TEND 🟰"
        }
        co_ma.textContent="S/C"
        co_ma2.textContent="(Estimativo)$"+(data.data[0].precio_Cotizacion)
    }

  

})
.catch(err=> console.log(`Hubo error ${err}`))  

const myrequest3 = new Request('https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=1&fechaConcertacionDesde='+fayer2+'&fechaConcertacionHasta='+fayer2,myInit);
fetch(myrequest3)
.then(response => response.json())
.then(data => {console.log(data);


    if(data.data[0].esEstimado_Cotizacion==false)
    {
        co_tr.textContent="$"+(data.data[0].precio_Cotizacion)
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_trr2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_trr2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_trr2.textContent="TEND 🟰"
        }
    }
    else
    {  

    if(data.data[0].movimiento_Cotizacion==1)
    {
        co_trr2.textContent="TEND ⬆️"

    }else if (data.data[0].movimiento_Cotizacion==2)
    {
        co_trr2.textContent="TEND ⬇️"

    }else if (data.data[0].movimiento_Cotizacion==3)
    {
        co_trr2.textContent="TEND 🟰"
    }
        co_tr.textContent="S/C"
        co_tr2.textContent="(Estimativo)$"+(data.data[0].precio_Cotizacion)
    }




})
.catch(err=> console.log(`Hubo error ${err}`))  

const myrequest5 = new Request('https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=20&fechaConcertacionDesde='+fayer2+'&fechaConcertacionHasta='+fayer2,myInit);
fetch(myrequest5)
.then(response => response.json())
.then(data => {console.log(data);

    if(data.data[0].esEstimado_Cotizacion==false)
    {
        co_gi.textContent="$"+(data.data[0].precio_Cotizacion)
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_gir2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_gir2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_gir2.textContent="TEND 🟰"
        }
    }
    else
    {
  
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_gir2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_gir2.textContent="TEND⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_gir2.textContent="TEND 🟰"
        }
        co_gi.textContent="S/C"
        co_gi2.textContent="(Estimativo)$"+(data.data[0].precio_Cotizacion)
    }

})
.catch(err=> console.log(`Hubo error ${err}`))  

const myrequest6 = new Request('https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=21&fechaConcertacionDesde='+fayer2+'&fechaConcertacionHasta='+fayer2,myInit);
fetch(myrequest6)
.then(response => response.json())
.then(data => {console.log(data);

    if(data.data[0].esEstimado_Cotizacion==false)
    {
        co_so.textContent="$"+(data.data[0].precio_Cotizacion)
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_sore2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_sore2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_sore2.textContent="TEND ="
        }
    }
    else
    {
    
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_sore2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_sore2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_sore2.textContent="TEND ="
        }
        co_so.textContent="S/C";
        co_so2.textContent="(Estimativo)$"+(data.data[0].precio_Cotizacion)
    }


})
.catch(err=> console.log(`Hubo error ${err}`))  

const myrequest7 = new Request('https://api.bcr.com.ar/gix/v1.0/PreciosCamara?idGrano=3&fechaConcertacionDesde='+fayer2+'&fechaConcertacionHasta='+fayer2,myInit);
fetch(myrequest7)
.then(response => response.json())
.then(data => {console.log(data);

    if(data.data[0].esEstimado_Cotizacion==false)
    {
        co_sor.textContent="$"+(data.data[0].precio_Cotizacion)
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_sorr2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_sorr2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_sorr2.textContent="TEND ="
        }
    }else
    {
       
        if(data.data[0].movimiento_Cotizacion==1)
        {
            co_sorr2.textContent="TEND ⬆️"

        }else if (data.data[0].movimiento_Cotizacion==2)
        {
            co_sorr2.textContent="TEND ⬇️"

        }else if (data.data[0].movimiento_Cotizacion==3)
        {
            co_sorr2.textContent="TEND ="
        }
        co_sor.textContent="S/C";
        co_sor2.textContent="(Estimativo)$"+(data.data[0].precio_Cotizacion)
    }


})
.catch(err=> console.log(`Hubo error ${err}`))  


const myrequest2 = new Request('https://api.bcr.com.ar/gix/v1.0/Cotizacion',myInit);

fetch(myrequest2)
.then(response => response.json())
.then(data => {console.log(data);
console.log(data.data[0].cotizacionCompraDivisas)
c_cd.textContent="$"+Math.floor(data.data[0].cotizacionCompraDivisas)
c_cb.textContent="$"+Math.floor(data.data[0].cotizacionCompraBilletes)
c_vd.textContent="$"+Math.floor(data.data[0].cotizacionVentaDivisas)
c_vb.textContent="$"+Math.floor(data.data[0].cotizacionVentaBilletes)
fecha.textContent=(data.data[0].fechaCotizacionBilletes)
fechab.textContent=(data.data[0].fechaCotizacionBilletes)
})
.catch(err=> console.log(`Hubo error ${err}`))


})




const myrequest4= new Request('https://api.bluelytics.com.ar/v2/latest');
fetch(myrequest4)
.then(response => response.json())
.then(data => {console.log(data);
cB_cb.textContent=("$"+data.blue.value_buy)
cB_vb.textContent=("$"+data.blue.value_sell)})
.catch(err=> console.log(`Hubo error ${err}`))  







        
    

        

WTzgBVz7ivt3efLkUu67ejZihJoMTU0JFiLG7ZUC


            



    

 
                                

         
              

             
                 
                       
