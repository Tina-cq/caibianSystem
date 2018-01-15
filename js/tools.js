/**
 * Created by hxsd on 2016/11/9.
 */
//居中
function center(obj){
    obj.style.display="block";
    obj.style.top=(document.documentElement.clientHeight-obj.offsetHeight)/2+"px";
    obj.style.left=(document.documentElement.clientWidth-obj.offsetWidth)/2+"px";
}

//window.onresize=function(){    //屏幕缩放,永远居中
//    center(obj);
//};

//拖拽
function drag(obj,title){
    title=title||obj;
    title.onmousedown=function(ev){          //鼠标点的对象绑定事件
        ev = ev || window.event;
        var l_dis=ev.clientX-obj.offsetLeft;    //盒子左边跟鼠标的距离
        var t_dis=ev.clientY-obj.offsetTop;     //盒子上边跟鼠标的距离
        document.onmousemove=function(ev){      //移动事件
            ev = ev || window.event;

            var l=ev.clientX-l_dis;
            var t=ev.clientY-t_dis;
            if(l<0){
                l=0;
            }
            var screenX=document.documentElement.clientWidth;    //屏幕的宽度
            if(l>=screenX-obj.offsetWidth){
                l=screenX-obj.offsetWidth;
            }
            if(t<0){
                t=0;
            }
            var screenH=document.documentElement.clientHeight;   //屏幕的高度
            if(t>=screenH-obj.offsetHeight){
                t=screenH-obj.offsetHeight;
            }
            obj.style.left=l+"px";
            obj.style.top=t+"px";
        };
        document.onmouseup=function(){      //鼠标抬起的时候,停止
            document.onmousemove=null;
        };
        ev.cancelBubble=true;   //取消冒泡事件
        return false;         //清除默认样式
    };
}