// https://www.omnicalculator.com/chemistry/isoelectric-point#isoelectric-point-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const isoelectricpointRadio = document.getElementById('isoelectricpointRadio');
const pKaRadio = document.getElementById('pKaRadio');
const pKbRadio = document.getElementById('pKbRadio');

let isoelectricpoint;
let pKa = v1;
let pKb = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

isoelectricpointRadio.addEventListener('click', function() {
  variable1.textContent = 'pKa';
  variable2.textContent = 'pKb';
  pKa = v1;
  pKb = v2;
  result.textContent = '';
});

pKaRadio.addEventListener('click', function() {
  variable1.textContent = 'Isoelectric point';
  variable2.textContent = 'pKb';
  isoelectricpoint = v1;
  pKb = v2;
  result.textContent = '';
});

pKbRadio.addEventListener('click', function() {
  variable1.textContent = 'Isoelectric point';
  variable2.textContent = 'pKa';
  isoelectricpoint = v1;
  pKa = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(isoelectricpointRadio.checked)
    result.textContent = `Isoelectric point = ${computeIsoelectricpoint().toFixed(2)}`;

  else if(pKaRadio.checked)
    result.textContent = `pKa = ${computepKa().toFixed(2)}`;

  else if(pKbRadio.checked)
    result.textContent = `pKb = ${computepKb().toFixed(2)}`;
})

// calculation

function computeIsoelectricpoint() {
  return (Number(pKa.value) + Number(pKb.value)) / 2;
}

function computepKa() {
  return (Number(isoelectricpoint.value) * 2) - Number(pKb.value);
}

function computepKb() {
  return (Number(isoelectricpoint.value) * 2) - Number(pKa.value);
}