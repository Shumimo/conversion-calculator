var input = document.getElementById('input');
var output = document.getElementById('output');
var inputType = document.getElementById('inputType');
var outputType = document.getElementById('outputType');
var inputTypeValue,outputTypeValue;

input.addEventListener("keyup",result);
inputType.addEventListener("change",result);
outputType.addEventListener("change",result);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function result() {
    inputTypeValue = inputType.value;
    outputTypeValue = outputType.value;

    // formula for inches
    if (inputTypeValue === "inches" && outputTypeValue==="inches") {
        output.value = input.value;
    }

    else if (inputTypeValue === "inches" && outputTypeValue==="millimeter") {
        output.value = Number(parseFloat(input.value * 25.4).toFixed(2));
    }

    else if (inputTypeValue === "inches" && outputTypeValue==="centimeter") {
        output.value = Number(parseFloat(input.value * 2.54).toFixed(2));
    }

    else if (inputTypeValue === "inches" && outputTypeValue==="meter") {
        output.value = Number(parseFloat(input.value * 39.37).toFixed(2));
    }

    // formula for millimeter
    if (inputTypeValue === "millimeter" && outputTypeValue==="millimeter") {
        output.value = input.value; 
    }

    else if (inputTypeValue === "millimeter" && outputTypeValue==="centimeter") {
        output.value = Number(parseFloat(input.value / 10).toFixed(2));
    }

    else if (inputTypeValue === "millimeter" && outputTypeValue==="meter") {
        output.value = Number(parseFloat(input.value / 1000).toFixed(2));
    }

    else if (inputTypeValue === "millimeter" && outputTypeValue==="inches") {
        output.value = Number(parseFloat(input.value / 25.4).toFixed(2));
    }

    // formula for centimeter
    if (inputTypeValue === "centimeter" && outputTypeValue==="centimeter") {
        output.value = input.value; 
    }

    else if (inputTypeValue === "centimeter" && outputTypeValue==="millimeter") {
        output.value = Number(parseFloat(input.value * 10).toFixed(2));
    }

    else if (inputTypeValue === "centimeter" && outputTypeValue==="meter") {
        output.value = Number(parseFloat(input.value / 100).toFixed(2));
    }

    else if (inputTypeValue === "centimeter" && outputTypeValue==="inches") {
        output.value = Number(parseFloat(input.value / 2.54).toFixed(2));
    }

    // formula for meter
    if (inputTypeValue === "meter" && outputTypeValue==="meter") {
        output.value = input.value; 
    }
    else if (inputTypeValue === "meter" && outputTypeValue==="centimeter") {
        output.value = Number(parseFloat(input.value * 100).toFixed(2));
    }

    else if (inputTypeValue === "meter" && outputTypeValue==="millimeter") {
        output.value = Number(parseFloat(input.value * 1000).toFixed(2));
    }

    else if (inputTypeValue === "meter" && outputTypeValue==="inches") {
        output.value = Number(parseFloat(input.value * 39.37).toFixed(2));
    }
}

