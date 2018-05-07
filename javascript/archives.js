// function addOnload(event)
// {

// 	var oldonload=window.onload;
// 	if(typeof window.onload!='function')
// 	{	
// 		window.onload=event;
// 	}
// 	else
// 	{
// 		window.onload=function()
// 		{
// 			oldonload();
// 			event();
// 		}
// 	}
// }
// window.onload=setInterval;
// addOnload(setheight);
window.onresize=function()
      {
        setheight();

      }
function setheight()
{
    var winHeight =0;
 	console.log(1)
      if (window.innerHeight)
      {

        winHeight = window.innerHeight;
      }
      else if ((document.body) && (document.body.clientHeight))
      {

        winHeight = document.body.clientHeight;
      }
      var html = document.getElementById('nav');
      // console.log(document.body.offsetHeight < winHeight)

        var family=document.getElementById('family');
      // console.log(document.body.offsetHeight < winHeight)

          family.style.height=winHeight-60+'px';
          html.style.height = winHeight-60+'px';
}
function imgdisplay()
{
var img=document.getElementsByClassName("box_img")[0].getElementsByTagName("a")[0].childNodes[0];
	// document.getElementsByTagName()
	var myimg=document.getElementsByClassName("img_display")[0];
	myimg=myimg.getElementsByTagName("a");
	var span=document.getElementsByClassName("ar_arrows")[0];
	var a=span.getElementsByTagName("span");
	console.log(myimg);
	img.setAttribute("src",myimg[0].childNodes[0].getAttribute("src"));
	a[0].onclick=function()
	{	
		str=img.getAttribute("src");
		console.log(str);
		for(var i=0;i<myimg.length;i++)
		{	console.log(myimg[i].childNodes[0].getAttribute("src")==str);
			if(myimg[i].childNodes[0].getAttribute("src")==str)
			{
				if(i!=0)
				{
					img.setAttribute("src",myimg[i-1].childNodes[0].getAttribute("src"));
					break;
				}
				else
				{
					return 0;
				}
			}
			
		}
	}
	a[1].onclick=function ()
	{
		str=img.getAttribute("src");
		console.log(str);
		for(var i=0;i<myimg.length;i++)
		{	console.log(myimg[i].childNodes[0].getAttribute("src")==str);
			if(myimg[i].childNodes[0].getAttribute("src")==str)
			{
				if(i!=myimg.length-1)
				{
					img.setAttribute("src",myimg[i+1].childNodes[0].getAttribute("src"));
					break;
				}
				else
				{
					return 0;
				}
			}
			
		}
	}
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
