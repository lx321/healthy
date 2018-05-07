

 window.onload = function(){
      window.onresize=function()
      {
        setheight();
        setwidth();
      }
function setheight()
{
    var winHeight =0;
 
      if (window.innerHeight)
      {

        winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight))
      {

        winHeight = document.body.clientHeight;
      }
      var html = document.getElementById('nav');
      var family=document.getElementById('family');
      // console.log(document.body.offsetHeight < winHeight)

        family.style.height=winHeight-60+'px';
          html.style.height = winHeight-60+'px';
}

      function setimg(){
        if(!document.getElementsByClassName)
        {
          return 0;
        }
        var ul=document.getElementsByClassName("navleft")[0];
        var li=ul.getElementsByTagName("li");
        for(var i=0;i<li.length;i++)
        {
          var img=li[i].childNodes[0].childNodes[0];
          li[i].childNodes[0].onmouseover=function()
          {
            var str=this.childNodes[0].getAttribute("src");
             str=str.replace("1","");
           // console.log(str);
          this.childNodes[0].setAttribute("src",str);
          } 
          li[i].childNodes[0].onmouseout=function()
          {
            var str=this.childNodes[0].getAttribute("src");
            str=str.split('.');
            str=str[0]+1+'.'+str[1];
            //console.log(str);
            this.childNodes[0].setAttribute("src",str);
          }
        }

        
      }
      function setsetting()
      {
        if(!document.getElementsByClassName)
        {
          return 0;
        }
        var ul=document.getElementsByClassName("setting")[0];
        var li=ul.getElementsByTagName('li');
       
        for(var i=0;i<li.length;i++)
        {
         
          li[i].childNodes[1].onmouseover=function()
          {
            var str=this.childNodes[0].getAttribute("src");
             str=str.replace("1","");
         this.childNodes[0].setAttribute("src",str);
          } 
          li[i].childNodes[1].onmouseout=function()
          {
            var str=this.childNodes[0].getAttribute("src");
            str=str.split('.');
            str=str[0]+1+'.'+str[1];
           console.log(str);
            this.childNodes[0].setAttribute("src",str);
          }
        }
      }
      function setwidth()
      {
        var div=document.getElementById("carousel");
        console.log(div.childNodes)
        var div1=document.getElementById("carousel").childNodes[3];
        var img=div1.getElementsByTagName("img");
        div.style.width=parseInt(document.body.clientWidth)-100+'px';
        div1.style.width=parseInt(div.style.width)*9+'px';
        div1.style.left=-parseInt(div.style.width)+'px';
        for(var i=0;i<img.length;i++)
        {
         img[i].style.width=parseInt(div.style.width)+'px';
         img[i].style.height=400+'px';
        }
      }
      function playimg()
      {
        var arrow=document.getElementsByClassName("arrows")[0];
        var a=arrow.getElementsByTagName("span");//两个箭头元素
        var list=document.getElementById("list");//九张图片
        var btn=document.getElementsByClassName("btn")[0].getElementsByTagName("div");//小圆点
        var main=document.getElementById("carousel");

        var index=1;
        var flag=false;
        var timer;

  // 实现轮播功能

        function play()//按时轮播
        { 

          timer=setInterval(function()
          { 
            a[1].onclick();
          },3000);
        }
        function stop()
        {
          clearInterval(timer);
        }
        main.onmouseover=stop;
        main.onmouseout=play;
        for(var i=0;i<a.lenth;i++)
        {
          a[i].onmouseover=stop;
          a[i].onmouseout=play;
        }
        play();
        function Move(offset)
        {
          var myleft=parseInt(list.style.left)+offset;
          var x=parseInt(main.style.width);
          var alltime=600;
          var intervar=10;
          var speed=offset/(alltime/intervar);
          function go()
          { 
            if(speed<0&&parseInt(list.style.left)>myleft||speed>0&&parseInt(list.style.left)<myleft)
            { 
              flag=true;
              list.style.left=parseInt(list.style.left)+speed+"px";
              setTimeout(go,intervar);
            }

            else
            { 
              list.style.left=myleft+"px";
              flag=false;
              if(parseInt(list.style.left)>-x)
              {
                list.style.left=-x*7+'px';
              }
              if(parseInt(list.style.left)<-x*7)
              {
                list.style.left=-x+"px";
              }
            }
            
          }
          go();
          
        }
          function showbutton()
          {
            for(var i=0;i<btn.length;i++)
            {
              if(btn[i].getAttribute("class")=="on")
              {  


                btn[i].setAttribute("class","");
                break;
              }
            }
            btn[index-1].setAttribute("class","on");
          }
        a[0].onclick=function()
        { 
          var limit=parseInt(main.style.width);

          if(!flag)
          { 
            index--;
           if(index<1)
            {
              index=7;
            }
            showbutton();
            Move(limit); 
          }
          
        }
        a[1].onclick=function()
        {   
          var limit=parseInt(main.style.width);
          
          if(!flag)
          { 
            index++;
            if(index>7)
            {
              index=1;
            }
              showbutton();
              Move(-limit);
            }
        } 
        for(var i=0;i<btn.length;i++)
          { 
            btn[i].onmouseover=function()
            {


              if(this.getAttribute("class")=="on")
              {
                return;
              }
              var myindex=parseInt(this.getAttribute("index"));
              var offset=-parseInt(main.style.width)*(myindex-index);
              Move(offset);
              index=myindex;
              showbutton();

            }
        }
  
  
      }
      function setIntroduce()
      {
        var introduce=document.getElementById("introduce");
        var a=introduce.getElementsByTagName("a");
        var timer;
        //console.log(a[1].getAttribute("class"));
        function playIntro()
        {
            for(var i=0;i<a.length;i++)
            {
  
              if(a[i].getAttribute("class")=="intro")
              {
                a[i].setAttribute("class","");
              if((i+1)<a.length)
              {
                  a[i+1].setAttribute("class","intro");
              }
              else if((i+1)>=a.length)
              {
                 a[0].setAttribute("class","intro");
              }
                break;
              }
             
            }
        }
        timer=setInterval(playIntro,1000);
        // for(var i=0;i<a.length;i++)
        // {
        //   a[i].onmouseover=function()
        //   {
        //     clearInterval(timer);
        //   }
        //   a[i].onmouseout=function()
        //   {
        //    timer=setInterval(playIntro,1000);
        //   }
        // }
      }
      function family()
      {
        var f=document.getElementsByClassName('Family')[0];
        var m=document.getElementsByClassName('family')[0];
      f.onmouseover=function()
      {
        m.style.display="block";
       var str=this.childNodes[0].getAttribute("src");
      str=str.replace("1","");
         this.childNodes[0].setAttribute("src",str);
      }
      f.onmouseout=function()
      {
        m.style.display="none";
         var str=this.childNodes[0].getAttribute("src");
            str=str.split('.');
            str=str[0]+1+'.'+str[1];
            //console.log(str);
            this.childNodes[0].setAttribute("src",str);
      }
      m.onmouseout=function()
      {
        m.style.display="none";
      }
      m.onmouseover=function(){
       m.style.display="block";
      }
      }
      setheight();
      setimg();
      setsetting();
      setwidth();
      playimg();
      setIntroduce();
      family();

};