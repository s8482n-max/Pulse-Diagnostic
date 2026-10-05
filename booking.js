const form=document.getElementById('callback-form');
const nameInput=document.getElementById('customer-name');
const phoneInput=document.getElementById('customer-phone');
const cityInput=document.getElementById('customer-city');
const packageInput=document.getElementById('customer-package');
const homeInput=document.getElementById('home-collection');
const selected=new URLSearchParams(location.search).get('package');
if([...packageInput.options].some(option=>option.value===selected)){packageInput.value=selected;homeInput.checked=selected==='home';}
function normalizePhone(value){let digits=value.replace(/\D/g,'');if(digits.length===12&&digits.startsWith('91'))digits=digits.slice(2);if(digits.length===11&&digits.startsWith('0'))digits=digits.slice(1);return /^[6-9]\d{9}$/.test(digits)?digits:null;}
[nameInput,phoneInput,cityInput].forEach(input=>input.addEventListener('input',()=>input.setCustomValidity('')));
packageInput.addEventListener('change',()=>{if(packageInput.value==='home')homeInput.checked=true;});
form.addEventListener('submit',event=>{event.preventDefault();nameInput.setCustomValidity(nameInput.value.trim()?'':'Please enter your name.');cityInput.setCustomValidity(cityInput.value.trim()?'':'Please enter your city.');const phone=normalizePhone(phoneInput.value);phoneInput.setCustomValidity(phone?'':'Please enter a valid 10-digit Indian mobile number.');if(!form.reportValidity())return;const text=['Hello Pulse Diagnostic, I would like to request a callback.','Name: '+nameInput.value.trim(),'Mobile: +91 '+phone,'City: '+cityInput.value.trim(),'Package: '+packageInput.options[packageInput.selectedIndex].text,'Home collection: '+(homeInput.checked?'Yes':'No'),'Please confirm the details and availability.'].join('\n');location.href='https://wa.me/918691964486?text='+encodeURIComponent(text);});

document.querySelectorAll('[data-book-package]').forEach(link=>link.addEventListener('click',()=>{const value=link.dataset.bookPackage;if(value){packageInput.value=value;homeInput.checked=value==='home';}}));
