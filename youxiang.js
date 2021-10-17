
function check()
    { 
        var name1 = document.getElementsByName("t1")[0]; 
        var name2 = document.getElementsByName("t1")[1]; 
        var name3= document.getElementsByName("t1")[2]; 
           var name4= document.getElementsByName("t1")[3]; 
           var name5= document.getElementsByName("t1")[4]; 
           var name6= document.getElementsByName("t1")[5]; 


        if(name1.value==""||name2.value==""||name3.value==""||name4.value==""||name5.value==""||name6.value=="")
{
            alert("带*为必填项");
            return false;
  }
else{       return true;}
    }


function password()
{
var p1=document.getElementById("a1");
var p2=document.getElementById("a2");
if(p1.value!=p2.value)
{
alert("两次输入密码不一致");
}

}


function Email() {
    var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
　　var obj = document.getElementById("mazey"); 
　　if(obj.value === ""){ 
　　　　alert("邮箱输入为空");
　　　　return false;
　　}else if(!reg.test(obj.value)){ 
　　　　alert("邮箱验证失败");
　　　　return false;
　　}else{
　　　　alert("邮箱验证成功");
　　　　return true;
　　}
    
}


function phonenumber()        

   {       

       var re;
            var ss = document.getElementById('txtMobile').value;
            re = /^(1[358][0-9]{9})$/;
            if (re.test(ss)==false) {
                alert("手机号输入非法");
                return false; 
            }

            var id=document.getElementById("txtIDNUMBER").value;
            var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
            if (reg.test(id) === false) {
                alert("身份证输入非法");
                return false;
             }
   }

