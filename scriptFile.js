function addMemo(){
    var col = document.getElementById("chosen-color");
    var text1 = document.getElementById("memoText");
    if(text1.value == "")
    {
      alert("Enter Something in the todo list");
      return;
    }
    var x = document.getElementById("Memos");
    var divi = document.createElement("div");
    divi.className = "memo-bar";
    var para = document.createElement("p");
    var node = document.createTextNode(text1.value);
    para.appendChild(node);
    var para2 = document.createElement("p");
    para2.appendChild(document.createTextNode("X"));
    para2.className = "close";
    para2.addEventListener("click",function(){
      this.parentNode.style.display = "none";
    });
    divi.appendChild(para);
    divi.appendChild(para2);
    divi.style.background = col.value;
    x.appendChild(divi);
    text1.value = "";
    col.value = "black";
}

function runScript(e){
  if(e.keyCode == 13)
  {
    var text1 = document.getElementById("memoText");
    if(text1.value != "")
    {
      addMemo();
    }
    else {
      alert("Enter Something in the todo list");
    }
    return false;
  }
}
