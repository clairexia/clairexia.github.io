 window.onload=function(){
      	var login_btn=document.getElementById('login'),
      	    login_box=document.getElementById('login_box'),
      	    close=document.getElementById('close');
      	// 封装添加事件监听程序
        function addEvent(ele,type,hander){
          if(ele.addEventListener){
            ele.addEventListener(type,hander,false);
          }else if(ele.attachEvent){
            ele.attachEvent('on'+type,hander);
          }else{
          	ele['on'+type]=hander;
          }
      	}
        // 显示登录层函数
      	function showLogin(){
      		login_box.style.display='block';
      	}
        // 隐藏登录层函数
        function hideLogin(){
          login_box.style.display='none';
        }

        function changecolor(){
          if(close.style.backgroundColor=='red'){close.style.backgroundColor='#eee';}
          else{close.style.backgroundColor='red';}
        }
       
        //点击登录按钮显示登录层 
        addEvent(login_btn,'click',showLogin);
        //点击关闭按钮隐藏登录层
        addEvent(close,'click',hideLogin);

         addEvent(close,'mouseover',changecolor);
         addEvent(close,'mouseout',changecolor);
      //二级菜单设置,鼠标移到菜单栏，二级菜单打开。
      
	   var aLi=document.getElementsByTagName('li');
	for(var i=0; i<aLi.length; i++){
		 aLi[i].onmouseover=function(){
            this.className = "lihover";  
            var oSubNav=this.getElementsByTagName('ul')[0];
            if(oSubNav){
            var This=oSubNav;
            clearInterval(This.time);
            This.time=setInterval(function(){
                    This.style.height=This.offsetHeight+30+"px";
                    if(This.offsetHeight>=240)
                    clearInterval(This.time);
                },30)
             }
          }    
        //鼠标离开菜单，二级菜单动画收起来。		
		aLi[i].onmouseout=function(){
            this.className = ""; 
            var oSubNav=this.getElementsByTagName('ul')[0];
            if(oSubNav){
            var This=oSubNav;
            clearInterval(This.time);
            This.time=setInterval(function(){
                    This.style.height=This.offsetHeight-30+"px";
                    if(This.offsetHeight<=0)
                    clearInterval(This.time);
                 },30)	
            }
		}	
	 }
   showTime();
  }
function checkTime(i){  //补位处理
     if(i<10){
         i="0"+i;
     } 
     return i;
  }
  
  function showTime(){
    var now=new Date();
    var year=now.getFullYear();
    var month=now.getMonth()+1;
    var day=now.getDate();
    var h=now.getHours();
    var m=now.getMinutes();
    var s=now.getSeconds();
    m=checkTime(m)
    s=checkTime(s)

    var weekday=new Array(7)
    weekday[0]="星期日"
    weekday[1]="星期一"
    weekday[2]="星期二"
    weekday[3]="星期三"
    weekday[4]="星期四"
    weekday[5]="星期五"
    weekday[6]="星期六"

    document.getElementById("show").innerHTML=""+year+"年"+month+"月"+day+"日 "+weekday[now.getDay()] +h+":"+m+":"+s;
    t=setTimeout('showTime()',500)
  }
