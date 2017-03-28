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
 
  }

