function getPin(){
    const pin = generatePin();
    const pinStr = pin + '';

    if(pinStr.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000)
    return random;
}

document.getElementById('btn-pin').addEventListener('click', function(){
    const generatedPin = getPin();
    
    const generatedPinField = document.getElementById('generated-pin-field');
    generatedPinField.value = generatedPin;
})

document.getElementById('pin-input-body').addEventListener('click', function(event){
    const number = event.target.innerText;
    
    const typedPinField = document.getElementById('typed-pin-field');
    typedPinField.value = typedPinField.value + number;
})

const pinSuccessMessage = document.getElementById('pin-success');
const pinFailureMessage = document.getElementById('pin-failure');

document.getElementById('btn-submit').addEventListener('click', function(){
    if(document.getElementById('generated-pin-field').value === document.getElementById('typed-pin-field').value){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})