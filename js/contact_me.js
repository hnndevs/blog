$(function(){$("input,textarea").jqBootstrapValidation({preventSubmit:true,submitError:function(e,t,n){},submitSuccess:function(e,t){t.preventDefault();var n=$("input#name").val();var r=$("input#email").val();var i=$("input#phone").val();var s=$("textarea#message").val();var o=n;if(o.indexOf(" ")>=0){o=n.split(" ").slice(0,-1).join(" ")}var u="You have received a new message from your website contact form."+"<br/>"+"Here are the details: Name: "+n+"<br/>"+"Email: "+r+"<br/>"+"Phone: "+i+"<br/>"+"Message:"+s;console.log(u);$.ajax({type:"POST",url:"https://mandrillapp.com/api/1.0/messages/send.json",data:{key:"BRqHxCUQ9Li7AEwrXKbRlw",message:{from_email:r,to:[{email:"hnndevs@gmail.com",name:"HNN Devs",type:"to"}],autotext:"true",subject:"Contact from blog",html:u}}}).done(function(e){console.log(u);console.log(e)})},filter:function(){return $(this).is(":visible")}});$('a[data-toggle="tab"]').click(function(e){e.preventDefault();$(this).tab("show")})});$("#name").focus(function(){$("#success").html("")})