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