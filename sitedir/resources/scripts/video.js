var videobox = document.querySelector('#videobox');
function video1(){
videobox.innerHTML = '';
setTimeout(function(){
    videobox.innerHTML = '<video width="100%" class="video" controls><source src="http://leopard.hosting.pecon.us/dl/dshqs/roblox2017.mp4" type="video/mp4"> <a href="http://leopard.hosting.pecon.us/dl/dshqs/roblox2017.mp4">download the video?</a></video>';
}, 1000);
}
function video2(){
videobox.innerHTML = '';
setTimeout(function(){
    videobox.innerHTML = '<video width="100%" class="video" controls><source src="/resources/videos/Mary%20And%20Maottos%20Wedding.mp4" type="video/mp4"> <a href="/resources/videos/Mary%20And%20Maottos%20Wedding.avi">download the video?</a></video>';
}, 1000);
}
function video3(){
videobox.innerHTML = '';
setTimeout(function(){
    videobox.innerHTML = '<video width="100%" class="video" controls><source src="/resources/videos/pixu_SILENT_HOLYCRAP.mp4" type="video/mp4"> <a href="/resources/videos/pixu_SILENT_HOLYCRAP.avi">download the video?</a></video>';
}, 1000);
}
