window.onload = init;
function init() {
var button = document.getElementById("v2");
button.onclick = handleButtonClick;
var b=document.getElementById("g2");
b.onclick=col;

}
function handleButtonClick() {
  var textInput = document.getElementById("v1");
  var songName = textInput.value;

  if (songName==""){
    alert("please add the song");
  }else{
  var li = document.createElement("li");
  li.innerHTML = songName;
  var ul = document.getElementById("u1");
  ul.appendChild(li);
  }

}
function col(){

  var text=document.getElementById("g3");
  var t=text.vlaue;
  var colo=["red","blue","green"];
  var i=Math.floor(Math.random()*colo.length);
  alert(t);
    if (t==colo[i]){
      alert("you guess right");
    }else{
      alert(t+" you loose answer was "+colo[i] );
    }


}
