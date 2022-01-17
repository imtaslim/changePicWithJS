function changePic() {
    let btn = document.getElementById('btn');
    let img = document.getElementById('myImage')
    if(btn.innerHTML == 'ON') {
        btn.innerHTML="OFF";
        img.src='pic_bulbon.gif';
    }
    else {
        btn.innerHTML="ON";
        img.src='pic_bulboff.gif';
    }
    
}