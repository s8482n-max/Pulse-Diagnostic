document.getElementById('year').textContent=new Date().getFullYear();

document.querySelectorAll('[data-toggle]').forEach(button=>{button.addEventListener('click',()=>{const id=button.dataset.toggle;const panel=document.getElementById(id);const expanded=panel.hidden;panel.hidden=!expanded;document.querySelectorAll('[data-toggle="'+id+'"]').forEach(control=>{control.setAttribute('aria-expanded',String(expanded));if(control.classList.contains('view-tests'))control.textContent=expanded?'Hide Tests':'View Tests';});});});

const pulseVideo=document.getElementById('pulse-video');
const soundButton=document.querySelector('.video-sound');
function updateSoundButton(){const silent=pulseVideo.muted||pulseVideo.volume===0;soundButton.textContent=silent?'Unmute':'Mute';soundButton.setAttribute('aria-label',silent?'Unmute video':'Mute video');}
soundButton.addEventListener('click',()=>{if(pulseVideo.muted||pulseVideo.volume===0){pulseVideo.muted=false;if(pulseVideo.volume===0)pulseVideo.volume=1;}else{pulseVideo.muted=true;}updateSoundButton();});
pulseVideo.addEventListener('volumechange',updateSoundButton);updateSoundButton();
