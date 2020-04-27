/*
 * Implement all your JavaScript in this file!
 */

"use strict";

var num1 = '';
var num2 = '';
var operationString = '';
var nextNumber = false;

function performCalculation(valueA, valueB) {
    if(operationString == '+'){
        return parseInt(valueA) + parseInt(valueB);
    } else if(operationString == '-') {
        return parseInt(valueA) - parseInt(valueB);
    } else if(operationString == '*') {
        return parseInt(valueA) * parseInt(valueB);
    } else {
        return parseFloat(valueA) / parseFloat(valueB);
    }
}

$(document).ready(function() {
    $('button').on('click', function() {
        var btn = $(this).html();
        if (btn >= '0' && btn <= '9') {
            displayValue(btn);
        } else if (btn == 'C') {
            clearValue();
            $('#display').val(num1);
        } else {
            handleOperation(btn);
        }
    });
});

function handleOperation(btn) {
    if (btn != '=') {
        if (num2 != '') {
            num1 = performCalculation(num1, num2);
            $('#display').val(num1);
            num2 = '';
        }
        operationString = btn;
        nextNumber = true;
    } else {
        if (num1 != '' && num2 != ''){
            num1 = performCalculation(num1,num2);
            $('#display').val(num1);
            num2 = '';
            operationString = '';
            nextNumber = false;
        } else if (num1 != '' && operationString != '' && num2 == ''){
            
        } else {
            $('#display').val(num1);
            num2 = '';
            operationString = '';
            nextNumber = false;
        }
    }
}

function displayValue(btn) {
    if (nextNumber == false) {
        num1 = num1.concat(btn);
        $('#display').val(num1);
    } else {
        num2 = num2.concat(btn);
        $('#display').val(num2);
    }
}

function clearValue() {
    num1 = '';
    num2 = '';
    operationString = '';
    nextNumber = false;
}