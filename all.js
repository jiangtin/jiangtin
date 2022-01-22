function change(){

    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://geoapi.qweather.com/v2/city/lookup?location='+city.innerText+'&key=9ef4a7e0a3f24541b8e7b5617a9a1ec1');
    xhr.send();
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4){
            if(xhr.status>=200&&xhr.status<300){
                var obj=JSON.parse(xhr.response)
                var city_id=obj.location[0].id;
                console.log(city_id);
             //    7天
             const w71=document.getElementById('w71');
             const w72=document.getElementById('w72');
             const w711=document.getElementById('w711');
             const w722=document.getElementById('w722');
             const p711=document.getElementById('p711');
             const p722=document.getElementById('p722');
             const sunset=document.getElementById('sunset');
             const a91=document.getElementsByClassName('a91');
             const p94=document.getElementsByClassName('p94');
             const p95=document.getElementsByClassName('p95');
             const b12=document.getElementsByClassName('b12');
             const b11_41=document.getElementsByClassName('b11_41');
             const b11_42=document.getElementsByClassName('b11_42');
             const a90=document.getElementsByClassName('a90');

                const xhr3=new XMLHttpRequest();
   xhr3.open('GET','https://devapi.qweather.com/v7/weather/7d?location='+city_id+'&key=9ef4a7e0a3f24541b8e7b5617a9a1ec1');
    xhr3.send();
    xhr3.onreadystatechange=function(){
        if(xhr3.readyState===4){
            if(xhr3.status>=200&&xhr3.status<300){
                var obj3=JSON.parse(xhr3.response)
                console.log(obj3); 
                w71.innerText=obj3.daily[0].tempMax+"/"+obj3.daily[0].tempMin+"°";
                w72.innerText=obj3.daily[1].tempMax+"/"+obj3.daily[1].tempMin+"°";
                w711.innerText=obj3.daily[0].textDay;w722.innerText=obj3.daily[1].textDay;
                 const n=obj3.daily[0].iconDay;p711.src="./icons/"+n+".svg";
                 const m=obj3.daily[1].iconDay;p722.src="./icons/"+m+".svg";
                 sunset.innerText=obj3.daily[0].sunset;
                 // 判断周几的函数
                 function getWeekDate(date){
                    var week;
                   if(date.getDay()==0) week="周日"
                   if(date.getDay()==1) week="周一"
                   if(date.getDay()==2) week="周二"
                   if(date.getDay()==3) week="周三"
                    if(date.getDay()==4) week="周四"
                     if(date.getDay()==5) week="周五"
                    if(date.getDay()==6) week="周六"
                     return week
                }                   
                console.log(getWeekDate(new Date("2022-01-22"))); 
    
                 for(var j=0;j<6;j++){
                    a91[j].innerHTML=obj3.daily[j].textDay;
                    b12[j].innerHTML=obj3.daily[j].textNight;
                     const s=obj3.daily[j].iconDay;
                     p94[j].src="./icons/"+s+".svg";
                     const ss=obj3.daily[j].iconNight;
                     p95[j].src="./icons/"+ss+".svg";
                    b11_41[j].innerHTML=obj3.daily[j].windDirNight;
                    b11_42[j].innerHTML=obj3.daily[j].windScaleNight+"级";
                    a90[j].innerHTML=getWeekDate(new Date(obj3.daily[j].fxDate));
 
                 }

               //  
               // 做曲线
                var max=[]; var min=[];
              for(var i=0;i<6;i++){
                max[i]=[obj3.daily[i].tempMax];
                min[i]=[obj3.daily[i].tempMin];
              }
   // 7d曲线
   var myChart = echarts.init(document.getElementById('main'));
     var option = {
       grid:{
      top:"5px",left:"40px",
      bottom:"5px",right:"40px",
       },
   xAxis:[ {
   data: ['A', 'B', 'C', 'D', 'E','F'],
   boundaryGap: false,
   show:false,
   }],
   yAxis: [{
       min:'dateMin',max:'dateMax',
     boundaryGap: false,
   show:false,
   splitNumber:20
   }],
   series: [
   {
     data: [max[0][0], max[1][0], max[2][0], max[3][0], max[4][0],max[5][0]],
     type: 'line',symbol:'circle',SymbolSize:5,color:"white",
     lineStyle:{
       normal:{
   color:'white',
   width:0.8
     },
     },
     label: {
       show: true,
       position: 'bottom',
       textStyle: {
         fontSize: 10
       }
     },
     smooth:true
   },
   // 
   {
     data: [min[0][0], min[1][0], min[2][0], min[3][0], min[4][0],min[5][0]],
     type: 'line',symbol:'circle',SymbolSize:5,color:"white",
     lineStyle:{
       normal:{
   color:'white',
   width:0.8
     },
     },
     label: {
       show: true,
       
       position: 'bottom',
       textStyle: {
         fontSize: 10
   }
   },
     smooth:true}]};
      myChart.setOption(option);
   // 
   
               }
            }
            else{
            console.log('wrong');
            }
           
        }
             //  实时
       const xhr2=new XMLHttpRequest();
       const n4=document.getElementById('n4');
       const w5=document.getElementById('w5');
       const wind=document.getElementById('wind');
       
    xhr2.open('GET','https://devapi.qweather.com/v7/weather/now?location='+city_id+'&key=9ef4a7e0a3f24541b8e7b5617a9a1ec1');
    xhr2.send();
    xhr2.onreadystatechange=function(){
        if(xhr2.readyState===4){
            if(xhr2.status>=200&&xhr2.status<300){
                var obj2=JSON.parse(xhr2.response)
                console.log(obj2);  
              n4.innerText=obj2.now.text;
              w5.innerText=obj2.now.temp+"°";
              wind.innerText=obj2.now.windDir+obj2.now.windScale+'级';

               }
            }
            else{
            console.log('wrong');
            } }
           //    shenghuozhishu
           const xhr1=new XMLHttpRequest();
           const last_w=document.getElementsByClassName('last_w');
           xhr1.open('GET','https://devapi.qweather.com/v7/indices/1d?type=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15&location='+city_id+'&key=9ef4a7e0a3f24541b8e7b5617a9a1ec1');
              xhr1.send();
              xhr1.onreadystatechange=function(){
                  if(xhr1.readyState===4){
                      if(xhr1.status>=200&&xhr1.status<300){
                          var obj1=JSON.parse(xhr1.response)  
                          for(var i=0;i<15;i++){
                              last_w[i].innerHTML=obj1.daily[i].name+'\xa0\xa0'+obj1.daily[i].category;
                          }
                         }
                      }
                      else{
                      console.log('wrong');
                      }
                     
                    }
               }
               function colorc( a,b){
                if(a<50){
                  b.style.backgroundColor="rgb(66, 180, 94)";
                }
                if(a<100&&a>50){
                  b.style.backgroundColor="rgb(218, 198, 14)";
                }
                if(a<150&&a>100){
                  b.style.backgroundColor="rgb(236, 144, 144)";
                }
                if(a<200&&a>150){
                  b.style.backgroundColor="rgb(163, 58, 58)";
                }
                if(a<300&&a>200){
                  b.style.backgroundColor="rgb(110, 31, 31)";
                }
                };
        
        

               const xhr4=new XMLHttpRequest();
               const air1=document.getElementById('air1');
               const color1=document.getElementById('color1');
               const t71=document.getElementById('t71');
               const air2=document.getElementById('air2');

               xhr4.open('GET','https://devapi.qweather.com/v7/air/now?location='+city_id+'&key=9ef4a7e0a3f24541b8e7b5617a9a1ec1');
               xhr4.send();
               xhr4.onreadystatechange=function(){
                   if(xhr4.readyState===4){
                       if(xhr4.status>=200&&xhr4.status<300){
                           var obj4=JSON.parse(xhr4.response)
                           console.log(obj4);  
                          air1.innerHTML=obj4.now.aqi+'&nbsp'+obj4.now.category;
                          t71.innerHTML=obj4.now.category;
                          air2.innerHTML=obj4.now.category;
                           
                          colorc(obj4.now.aqi,color1);
                          colorc(obj4.now.aqi,t71);
                          colorc(obj4.now.aqi,air2);


                          }
                       }
                       else{
                       console.log('wrong');
                       } }
              
              }
            else{
            console.log('wrong');
            }  
        }

}

change();

