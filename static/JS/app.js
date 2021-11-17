   
const messageEle = document.getElementById('area');
const counterEle = document.getElementById('counter');

messageEle.addEventListener('input', function (e) {
    const target = e.target;
    const currentLength = target.value.length;
    counterEle.innerHTML = `${currentLength}`;
});
