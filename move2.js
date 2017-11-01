function getStyle(obj,name){
			if(obj.currentStyle){
				return obj.currentStyle[name];
			}
			else{
				return getComputedStyle(obj,false)[name];
			}
		}
		
		function starMove(obj,json,fnEnd){
			clearInterval(obj.timer);
			obj.timer=setInterval(function(){
				var bStop=true;
			for(var name in json){
				var cur=0;
				if(name=='opacity'){
					cur=Math.round(parseFloat(getStyle(obj,name))*100);
				}
				else{
					cur=parseInt(getStyle(obj,name));
				}
				var speed=(json[name]-cur)/7;
				
				if(speed>0){
					speed=Math.ceil(speed);
				}
				else{
					speed=Math.floor(speed);
					
				}
			
				if(cur!=json[name]){
					bStop=false;
				}
				
					if(name=='opacity'){
						obj.style.filter='alpha(opacity:'+(cur+speed)+')';
						obj.style.opacity=(cur+speed)/100;
					}
					else{
						obj.style[name]=cur+speed+'px';
					}
				
			
			}
			if(bStop){
					clearInterval(obj.timer);
					if(fnEnd)fnEnd();
				}
			},30);

		}