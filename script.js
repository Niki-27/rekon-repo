const form = document.getElementById('pmfby-form');
const insuranceAmount = document.getElementById('insurance-amount');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const cropName = document.getElementById('crop-name').value;
  const cropArea = document.getElementById('crop-area').value;
  const premiumRate = document.getElementById('premium-rate').value;
  
  const insurance = (cropArea * premiumRate) / 100;
  
  insuranceAmount.innerText = `The insurance amount for ${cropName} crop is Rs. ${insurance}`;
});
