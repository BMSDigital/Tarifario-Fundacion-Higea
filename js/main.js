const botontoggle = document.getElementById('slide-bar');

botontoggle.addEventListener('mouseover',function(){
    document.getElementById('slide-bar').classList.toggle('active');
    document.getElementById('logo').classList.toggle('hiden');     
});

botontoggle.addEventListener('mouseout',function(){
    document.getElementById('slide-bar').classList.toggle('active');
    document.getElementById('logo').classList.toggle('hiden');     
});
