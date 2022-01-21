
const city=document.getElementById('city');
const text=document.getElementById('text');
const ret=document.getElementById('return');
const btn=document.getElementsByTagName('button')[0];
const now_city=document.getElementById('now_city');
const btn1=document.getElementById('btn_one');
  const sousuo=document.getElementById('sousuo');
  const citys=document.getElementById('citys');
  const shanchu=document.getElementById('shanchu');
  const fire_city=document.getElementsByClassName('fire_city');
  const [f1,f2,f3,f4,f5,f6,f7]=fire_city;
  btn1.onclick=function(){
    sousuo.style.visibility="visible";
  }
  ret.onclick=function(){
    sousuo.style.visibility="hidden";
  }
  btn.onclick=function(){
      now_city.innerText=text.value;
      sousuo.style.visibility="hidden";
      city.innerText=text.value;
      change();
      var li=document.createElement('li');
    li.innerHTML=text.value;
    citys.appendChild(li);
  }
  shanchu.onclick=function(){
      while(citys.hasChildNodes()){
          citys.removeChild(citys.firstChild);
      }
  }
  f1.onclick=function(){
      text.value=f1.innerText;
      city.innerText=f1.innerText;
      change();
      sousuo.style.visibility="hidden";
      var li=document.createElement('li');
      li.innerHTML=f1.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f1.innerHTML;
  }
  f2.onclick=function(){
    text.value=f2.innerText;
    city.innerText=f2.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f2.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f2.innerHTML;
}
f3.onclick=function(){
    text.value=f3.innerText;
    city.innerText=f3.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f3.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f3.innerHTML;
}
f4.onclick=function(){
    text.value=f4.innerText;
    city.innerText=f4.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f4.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f4.innerHTML;
}
f5.onclick=function(){
    text.value=f5.innerText;
    city.innerText=f5.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f5.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f5.innerHTML;
}
f6.onclick=function(){
    text.value=f6.innerText;
    city.innerText=f6.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f6.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f6.innerHTML;
}
f7.onclick=function(){
    text.value=f7.innerText;
    city.innerText=f7.innerText;
    change();
    sousuo.style.visibility="hidden";
    var li=document.createElement('li');
    li.innerHTML=f7.innerHTML;
      citys.appendChild(li);
      now_city.innerText=f7.innerHTML;
}