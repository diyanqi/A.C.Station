`
<div class="mdui-card">
<div class="mdui-card-media">
<img src="card.jpg"/>
<div class="mdui-card-media-covered">
<div class="mdui-card-primary">
<div class="mdui-card-primary-title">Title</div>
<div class="mdui-card-primary-subtitle">Subtitle</div>
</div>
<div class="mdui-card-actions">
<button class="mdui-btn mdui-ripple mdui-ripple-white">action 1</button>
<button class="mdui-btn mdui-ripple mdui-ripple-white">action 2</button>
</div>
</div>
</div>
</div>
`

$.ajax({
    type:"GET",
    url:"data.json",
    dataType:"json", 
    success:function(data){
           var d=data;
           for(var i in d){
               document.getElementById("things").innerHTML=`
               <div class="mdui-card mdui-container">
               <div class="mdui-card-media">
               <img src="`+d[i]['img']+`"/>
               <div class="mdui-card-media-covered">
               <div class="mdui-card-primary">
               <div class="mdui-card-primary-title">`+d[i]['title']+`</div>
               <div class="mdui-card-primary-subtitle">`+d[i]['subtitle']+`</div>
               </div>
               <div class="mdui-card-actions">
               <button onclick="location.href='`+d[i]['link']+`'" class="mdui-btn mdui-ripple mdui-ripple-white">了解更多</button>
               </div>
               </div>
               </div>
               </div>
               <br><br><br>
               `+document.getElementById("things").innerHTML;
           }
    },
    error:function(jqXHR){
       aler("发生错误："+ jqXHR.status);
    }
});