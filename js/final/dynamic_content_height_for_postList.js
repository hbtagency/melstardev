function dynamicHeightUpdater(){var i=window.innerWidth,t=3;i>767&&1200>i&&(t=2);var n=0,e=0,s=1;$(".post_list_item").each(function(){$this=$(this);var i=$this.height()+35;i>n&&(n=i),s%t==0&&($(".post_list_item").slice(e,s).css("min-height",n),e=s,n=0),s++}),768>i&&$(".post_list_item").css("min-height","0");var i=window.innerWidth,t=2,n=0,e=0,s=1;$(".function_list_item").each(function(){$this=$(this);var i=$this.height()+30;i>n&&(n=i),s%t==0&&($(".function_list_item").slice(e,s).css("min-height",n),e=s,n=0),s++}),768>i&&$(".function_list_item").css("min-height","0")}window.onload=function(){dynamicHeightUpdater()};var doit;window.onresize=function(){clearTimeout(doit),doit=setTimeout(function(){dynamicHeightUpdater()},100)};