var videobox = document.querySelector('#videobox');
function video1(){
videobox.innerHTML = '<source src="https://leopard.hosting.pecon.us/dl/dshqs/roblox2017.mp4" type="video/mp4">';
videobox.loop = 'false'; 
videobox.muted = 'false';
videobox.play();
}
