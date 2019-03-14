var once=1;
function fun1(eds){
    var c=document.getElementsByClassName("btn")[0];
    c.innerHTML="Save ";
    var q=document.createElement("i");
    q.className="fa fa-floppy-o";
    c.appendChild(q);
    //document.execCommand("contenteditable", true, "p");
    
    var vs = document.getElementById("pqrst");
    var head=document.getElementById("blogTitle");
    if(once===1){
    var fun = document.getElementById("blogBody").innerHTML;
    var head1= document.getElementById("blogTitleNew").innerHTML;   
    document.getElementById("blogBody").setAttribute('style','display:none;');
    document.getElementById("blogTitleNew").setAttribute('style','display:none;');
    var par = document.createElement('textarea');
    var qar = document.createElement('textarea');
    qar.setAttribute('style','font-family:Abel, sans-serif;font-size:100%');
    var lis = document.createTextNode(fun.trim());
    var lis1 = document.createTextNode(head1.trim());    
    par.appendChild(lis);
    qar.appendChild(lis1);    
    vs.appendChild(par);
    head.appendChild(qar);    
    par.classList.add("editcmnt1");
    qar.classList.add("editcmnt2");    
  par.style.height = (par.scrollHeight)+"px";
        //qar.style.height = (qar.scrollHeight)+"px";    
         
    once=2;
        
        document.getElementsByClassName("blogAuthor")[0].style.marginBottom="10px";
    }
    else {
       var gun = document.getElementsByClassName("editcmnt1")[0].value;
       var bun = document.getElementsByClassName("editcmnt2")[0].value;
       console.log(gun);
        document.getElementById("blogBody").innerHTML =gun;
        document.getElementById("blogTitleNew").innerHTML =bun;
        document.getElementsByClassName("editcmnt1")[0].setAttribute('style','display:none;');
        document.getElementsByClassName("editcmnt2")[0].setAttribute('style','display:none;');
        document.getElementById("blogBody").setAttribute('style','display:block;');
        document.getElementById("blogTitleNew").setAttribute('style','display:block;');
         document.getElementById("editing").innerHTML ='Edit&nbsp;<i class="fa fa-edit"></i>';
        once=1;
        vs.removeChild(vs.lastChild);
        head.removeChild(head.lastChild);
    }
        
}
var p=1;
function fun2(){
    var a=document.getElementById("cmnt");
    document.getElementById("btn1").innerHTML='<i class="fa fa-thumbs-up"></i> Liked!';
    if(p===1){
        a.innerHTML=p+" person likes this!";
        p++;
    }
    else{
        a.innerHTML=p+" people have liked this!";
    p++;
    }

    
    
}
function fun3(){
     var w=document.getElementById("comments").value;
    var q=document.getElementById("tbl1");
    var row = q.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML=w;
    document.getElementById("comments").value="";
   
}
