let player=1;
let score_player1=0;
let score_player2=0;
function play(){
    document.getElementById('box').style.display="none";
    let row=+document.getElementById("row").value;
    let col=+document.getElementById("col").value;
    let html="";
    for(let i=0;i<row;i++){
        html+="<tr>";
        for(let j=0;j<col;j++){
            html+='<td id="'+i+'-'+j+'" onclick="change(this,'+row+','+col+')">';
            html+="</td>";
        }
        html+="</tr>";
    }
    document.getElementById("content").innerHTML=html;
}
function change(element,row,col){
    if(!element.innerHTML){
        if(player == 1){
            element.innerHTML="O";
            element.style.color="red";
            element.style.backgroundColor="lightgray";
            if(check_win(element,row,col)){
                let player1=document.getElementById("name1").value;
                let player2=document.getElementById("name2").value;
                score_player1+=10;
                document.getElementById('box').style.display="block";
                document.getElementById('winer').innerHTML= 'Người thắng:'+player1;
                document.getElementById('score1').innerHTML= 'Điểm của '+player1+':'+score_player1+' Điểm';
                document.getElementById('score2').innerHTML= 'Điểm của '+player2+':'+score_player2+' Điểm';
            }
            else{
                player=2;
            }
        }
        else{
            element.innerHTML="X";
            element.style.color="blue";
            element.style.backgroundColor="lightgray";
            if(check_win(element,row,col)){
                let player1=document.getElementById("name1").value;
                let player2=document.getElementById("name2").value;
                score_player2+=10;
                document.getElementById('box').style.display="block";
                document.getElementById('winer').innerHTML= 'Người thắng:'+player2;
                document.getElementById('score1').innerHTML= 'Điểm của '+player1+':'+score_player1+' Điểm';
                document.getElementById('score2').innerHTML= 'Điểm của '+player2+':'+score_player2+' Điểm';
            }
            else{
                player=1;
            }
        }
    }
}
function check_win(element,row,col){
    let content= element.innerHTML;
    console.log(content);
    let position = element.id;
    x=parseInt(position.substring(0,1));
    y=parseInt(position.substring(2,3));

    //check hang ngang phai
    var count=1;
    var i=1;
    while(y-i>=0 && document.getElementById(x+'-'+(y-i)).innerHTML == content){
        i++;
        count++;
    }

    // check hang ngang trai
    var i = 1;
    while(y + i < col && document.getElementById(x + '-' + (y + i)).innerHTML == content) {
        i++;
        count++;   
    }
    
    if(count == 5) {
        return true;
    }
    //check hang doc phai
    var count=1;
    var i=1;
    while(x-i>=0 && document.getElementById((x-i)+'-'+y).innerHTML == content){
        i++;
        count++;
    }

    // check hang doc trai
    var i = 1;
    while(x + i < row && document.getElementById((x+i) + '-' + y).innerHTML == content) {
        i++;
        count++;   
    }

   
    if(count == 5) {
        return true;
    }

    // check hang cheo
    var i=1;
    var count=1;
    //cheo trai tren
    while(x-i>=0 && y-i>=0 && document.getElementById((x-i) + '-' + (y-i)).innerHTML == content){
        i++;
        count++;
    }
    // cheo phai duoi
    var i=1;
    while(x+i<row && y+i<col && document.getElementById((x+i) + '-' + (y+i)).innerHTML == content){
        i++;
        count++;
    }
    if(count == 5) {
        return true;
    }
    //===============
    // cheo trai duoi
    var i=1;
    var count=1;
    while(x-i>=0 && y+i<col && document.getElementById((x-i) + '-' + (y+i)).innerHTML == content){
        i++;
        count++;
    }
    // cheo phai tren
    var i=1;
    while(x+i<row && y-i>=0 && document.getElementById((x+i) + '-' + (y-i)).innerHTML == content){
        i++;
        count++;
    }
    if(count == 5) {
        return true;
    }
    //

    return false;
}
function refresh(){
    location.reload();
}