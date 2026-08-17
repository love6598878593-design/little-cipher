const card=document.querySelector('#riddleCard');
const overlay=document.querySelector('#overlay');
const toast=document.querySelector('#toast');
const checkoutModal=document.querySelector('#checkoutModal');
const store=window.LITTLE_CIPHER_STORE||{plans:{}};

function flip(){card.classList.toggle('flipped');card.setAttribute('aria-pressed',card.classList.contains('flipped'))}
function openTrial(plan='Monthly Club',due='$0 today'){
  const subscriptionUrl=store.plans?.[plan];
  if(subscriptionUrl){window.location.href=subscriptionUrl;return}
  document.querySelector('#selectedPlan').textContent=plan;
  document.querySelector('#selectedDue').textContent=due;
  const isTrial=due==='$0 today';
  document.querySelector('#checkoutEyebrow').textContent=isTrial?'14-day private trial':'Secure checkout';
  document.querySelector('#checkoutNote').textContent=isTrial?'No card required today. Create a parent account and open the first collection.':'Create a parent account, then continue to secure payment.';
  document.querySelector('#checkoutSubmit').textContent=isTrial?'Start my free trial':'Continue to payment';
  document.querySelector('#checkoutFormStep').hidden=false;
  document.querySelector('#checkoutSuccess').hidden=true;
  checkoutModal.inert=false;checkoutModal.classList.add('open');checkoutModal.setAttribute('aria-hidden','false');overlay.classList.add('open');
  document.querySelector('#orderEmail').focus();
}
function closeTrial(){checkoutModal.classList.remove('open');checkoutModal.setAttribute('aria-hidden','true');checkoutModal.inert=true;overlay.classList.remove('open')}

card.addEventListener('click',flip);
document.querySelector('#flipHint').addEventListener('click',flip);
document.querySelectorAll('.start-trial').forEach(button=>button.addEventListener('click',()=>openTrial(button.dataset.plan,button.dataset.due)));
document.querySelector('#closeCheckout').addEventListener('click',closeTrial);
document.querySelector('#continueShopping').addEventListener('click',closeTrial);
overlay.addEventListener('click',closeTrial);
document.querySelector('#checkoutForm').addEventListener('submit',event=>{
  event.preventDefault();document.querySelector('#checkoutFormStep').hidden=true;document.querySelector('#checkoutSuccess').hidden=false;
  toast.textContent='Your selection is ready';toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),2200);
});
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeTrial()});
