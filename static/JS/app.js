   
const messageEle = document.getElementById('text');
const counterEle = document.getElementById('char');

messageEle.addEventListener('input', function (e) {
    const target = e.target;
    if(target.value<=0)
    {
        document.getElementById("word").innerHTML=0;
    }
    else{
    var num = target.value.trim().split(/\s+/).length;
    document.getElementById("word").innerHTML=num;
    }
    const currentLength = target.value.length;
    counterEle.innerHTML = `${currentLength}`;
});
