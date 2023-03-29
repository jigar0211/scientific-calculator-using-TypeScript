var calculatorDisplay = document.querySelector(".display-container");
var numberButtons = document.querySelectorAll('.number-button');
// operator
var openParenthesis = document.querySelector("#opened-parenthesis");
var closedParenthesis = document.querySelector("#closed-parenthesis");
var eraseAll = document.querySelector("#erase-all-sign");
var eraseButton = document.querySelector("#erase-button");
var divideButton = document.querySelector("#split-operator");
var multiplicationButton = document.querySelector("#multiplication-operator");
var lessButton = document.querySelector("#less-operator");
var plusButton = document.querySelector("#plus-operator");
var decimalButton = document.querySelector("#decimal-operator");
var equalButton = document.querySelector("#equal-button");
var moduloButton = document.querySelector('#modulo');
var exponentButton = document.querySelector('#exponent');
var plusminusButton = document.querySelector('#plusminus');
var xsqureButton = document.querySelector("#xsqure");
// calculator array
var calculatorArray = [];
var calculatorDomArray = [];
// other variable 
var degrad = 1; // or false, depending on your needs
var memory = [];
var operatorChecker;
var fe = 1;
var inv_trigo = 1;
var hyp_trigo = 1;
var flag = 1;
var secondval = true;
var tempSpan;
var counter;
var parenthesisCounter;
var finalParenthesis;
var toLoop = false;
// this variable is used to save how many time the user click a number before an operator, that's for the purpose of blocking the user to make numbers larger than 15 digits
var characterCounter = 0;
var tempcharacterCounter;
eventFunction();
function eventFunction() {
    // append function
    function appendNumber(number) {
        // create span container function
        tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');
        tempSpan.textContent = String(number);
        calculatorDomArray.push(tempSpan);
        calculatorDisplay.append(tempSpan);
    }
    // number event listener
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            if (characterCounter < 16) {
                characterCounter++;
                appendNumber(button.value);
            }
        });
    });
    var buttons = [
        { element: decimalButton, value: "." },
        { element: plusButton, value: "+" },
        { element: lessButton, value: "-" },
        { element: multiplicationButton, value: "*" },
        { element: divideButton, value: "/" },
        { element: moduloButton, value: "%" },
        { element: exponentButton, value: "^" },
        { element: openParenthesis, value: "(" },
        { element: closedParenthesis, value: ")" },
    ];
    buttons.forEach(function (button) {
        button.element.addEventListener("click", function () {
            tempcharacterCounter = characterCounter;
            characterCounter = 0;
            appendNumber(button.value);
        });
    });
    // for 2nd Button Start
    var secondbutton = document.querySelector("#secondbtn");
    var flag = 1;
    secondbutton.addEventListener("click", function () {
        var firstValues = document.getElementsByClassName('firstvalue');
        var secondValues = document.getElementsByClassName('secondvalue');
        if (flag === 1) {
            for (var i = 0; i < firstValues.length; i++) {
                firstValues.item(i).style.display = "none";
            }
            for (var i = 0; i < secondValues.length; i++) {
                secondValues.item(i).style.display = "inline-block";
            }
            flag = 0;
        }
        else {
            for (var i = 0; i < secondValues.length; i++) {
                secondValues.item(i).style.display = "none";
            }
            for (var i = 0; i < firstValues.length; i++) {
                firstValues.item(i).style.display = "inline-block";
            }
            flag = 1;
        }
    });
    // for 2nd Button End 
    // Change Deg to RAD start
    document.addEventListener('DOMContentLoaded', function () {
        var degButton = document.querySelector('#deg');
        degButton.addEventListener("click", function () {
            if (degrad == 1) {
                var degElement = document.querySelector('#deg');
                degElement.innerHTML = "RAD";
                degrad = 0;
            }
            else {
                var degElement = document.querySelector('#deg');
                degElement.innerHTML = 'DEG';
                degrad = 1;
            }
        });
    });
    // Change Deg to RAD End
    // For F-E Button Start
    document.addEventListener("DOMContentLoaded", function () {
        var feButton = document.querySelector("#febtn");
        feButton.addEventListener("click", function () {
            if (fe) {
                calculatorDisplay.textContent = String(Number(calculatorDisplay.textContent));
                fe = false;
            }
            else {
                calculatorDisplay.textContent = Number(calculatorDisplay.textContent).toExponential();
                fe = true;
            }
        });
    });
    // For F-E Button End
    // Sign Change Button Start
    document.addEventListener('DOMContentLoaded', function () {
        var sigchangeButton = document.querySelector("#sigchange");
        sigchangeButton.addEventListener("click", function () {
            var _a;
            if (((_a = calculatorDisplay.textContent) === null || _a === void 0 ? void 0 : _a.charAt(0)) === "-") {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
            }
            else {
                calculatorDisplay.textContent = "-" + calculatorDisplay.textContent;
            }
        });
    });
    // Sign Change Button End
    document.addEventListener('DOMContentLoaded', function () {
        var factorialButton = document.querySelector("#factorial");
        if (factorialButton) {
            factorialButton.addEventListener("click", function () {
                if (Number(calculatorDisplay.textContent) < 0) {
                    return NaN; // Error: factorial of negative number is undefined
                }
                if (calculatorDisplay.textContent === "0" || calculatorDisplay.textContent === "1") {
                    return calculatorDisplay.textContent = "1"; // Base case: factorial of 0 or 1 is 1
                }
                var result = 1;
                for (var i = 2; i <= Number(calculatorDisplay.textContent); i++) {
                    result *= i;
                }
                return calculatorDisplay.textContent = String(result);
            });
        }
    });
    document.addEventListener('DOMContentLoaded', function () {
        var oneuponxButton = document.querySelector("#oneuponx");
        oneuponxButton.addEventListener("click", function () {
            calculatorDisplay.textContent = (1 / Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var lnButton = document.getElementById('ln');
        lnButton.addEventListener("click", function () {
            if (calculatorDisplay.textContent !== null) {
                var num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.log(num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var logButton = document.getElementById('log');
        logButton.addEventListener("click", function () {
            if (calculatorDisplay.textContent !== null) {
                var num = Number(calculatorDisplay.textContent);
                var log10Num = Math.log(num) / Math.log(10);
                calculatorDisplay.textContent = String(log10Num);
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var tenrestoxButton = document.getElementById('tenrestox');
        tenrestoxButton.addEventListener("click", function () {
            if (calculatorDisplay.textContent !== null) {
                var num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.pow(10, num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var xsqureButton = document.querySelector('#xsqure');
        xsqureButton.addEventListener('click', function () {
            if (calculatorDisplay.textContent !== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 2).toString();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var xcubeButton = document.querySelector("#xcube");
        xcubeButton.addEventListener("click", function () {
            if (calculatorDisplay.textContent !== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 3).toString();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cbrtButton = document.querySelector("#cbrt");
        cbrtButton.addEventListener("click", function () {
            var num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(num, 1 / 3));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var sqrtButton = document.querySelector("#sqrt");
        sqrtButton.addEventListener("click", function () {
            if (calculatorDisplay.textContent !== null) {
                var num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.sqrt(num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var modxButton = document.querySelector("#modx");
        modxButton.addEventListener("click", function () {
            var _a;
            if (((_a = calculatorDisplay.textContent) === null || _a === void 0 ? void 0 : _a.charAt(0)) === "-") {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var tworesxButton = document.querySelector("#tworesx");
        tworesxButton.addEventListener("click", function () {
            var num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(2, num));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var eraisedtoxButtton = document.querySelector("#eraisedtox");
        eraisedtoxButtton.addEventListener("click", function () {
            var num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(2.718281828459045, num));
        });
    });
    // Trigono inverse and trigono hyper change button Start
    document.addEventListener("DOMContentLoaded", function () {
        var trignosecondButton = document.querySelector("#trigonosecond");
        trignosecondButton.addEventListener("click", function () {
            if (inv_trigo) {
                inv_trigo = 0;
            }
            else {
                inv_trigo = 1;
            }
            change_trigo_func();
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var trignohuperButton = document.querySelector("#trigonohyper");
        trignohuperButton.addEventListener("click", function () {
            if (hyp_trigo) {
                hyp_trigo = 0;
            }
            else {
                hyp_trigo = 1;
            }
            change_trigo_func();
        });
    });
    function change_trigo_func() {
        if (inv_trigo == 0 && hyp_trigo == 1) {
            var trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            var inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "flex";
            ;
            var hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            var hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 1 && hyp_trigo == 1) {
            var trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "flex";
            var inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            var hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            var hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 0 && hyp_trigo === 0) {
            var trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            var inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            var hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            var hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "flex";
        }
        else {
            var trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            var inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            var hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "flex";
            var hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
    }
    // Trigono inverse and trigono hyper change button End
    // Trigonometry function start
    document.addEventListener('DOMContentLoaded', function () {
        var sinButton = document.querySelector("#sin");
        sinButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.sin((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.sin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cosButton = document.querySelector("#cos");
        cosButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.cos((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.cos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cotButton = document.querySelector("#cot");
        cotButton === null || cotButton === void 0 ? void 0 : cotButton.addEventListener('click', function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.tan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.tan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cosecButton = document.querySelector("#csc");
        cosecButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.sin(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.sin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var secButton = document.querySelector('#sec');
        secButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.cos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.cos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var tanButton = document.querySelector("#tan");
        tanButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.tan((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.tan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    // for Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', function () {
        var sininverseButton = document.querySelector("#insin");
        sininverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.asin((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.asin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cosinverseButton = document.querySelector("#incos");
        cosinverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.acos((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cotinverseButton = document.querySelector("#incot");
        cotinverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.atan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.atan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var secinverseButton = document.querySelector("#insec");
        secinverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.acos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cscinverseButton = document.querySelector("#incsc");
        cscinverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.asin(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var taninverseButton = document.querySelector("#intan");
        taninverseButton.addEventListener("click", function () {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.atan((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.atan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    // for Inverse Trigonometry functions End
    // for Hyper Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', function () {
        var sinhyperButton = document.querySelector("#hsin");
        sinhyperButton.addEventListener("click", function () {
            var x = Number(calculatorDisplay.textContent);
            var result = (Math.exp(x) - Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(result);
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var coshyperButton = document.querySelector("#hcos");
        coshyperButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String((Math.exp(Number(calculatorDisplay.textContent)) + Math.exp(-Number(calculatorDisplay.textContent))) / 2);
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cothyperButton = document.querySelector("#hcot");
        cothyperButton.addEventListener("click", function () {
            var input = calculatorDisplay.textContent;
            if (input !== null) {
                var x = Number(input);
                calculatorDisplay.textContent = String((Math.exp(x) + Math.exp(-x)) / (Math.exp(x) - Math.exp(-x)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var sechyperButton = document.querySelector("#hsec");
        sechyperButton.addEventListener("click", function () {
            var x = Number(calculatorDisplay.textContent);
            var cosh = (Math.exp(x) + Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(cosh);
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cschyperButton = document.querySelector("#hcsc");
        cschyperButton.addEventListener("click", function () {
            var x = Number(calculatorDisplay.textContent);
            var sinh = (Math.exp(x) - Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(sinh);
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var tanhyperButton = document.querySelector("#htan");
        tanhyperButton.addEventListener("click", function () {
            var x = Number(calculatorDisplay.textContent);
            var tanh = (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
            calculatorDisplay.textContent = String(tanh);
        });
    });
    // for Hyper Trigonometry functions End
    // for Hyper Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', function () {
        var sinhyperinverseButton = document.querySelector("#hinsin");
        sinhyperinverseButton.addEventListener("click", function () {
            Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) + 1));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var coshyperinverseButton = document.querySelector("#hincos");
        coshyperinverseButton.addEventListener("click", function () {
            Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) - 1));
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var cothyperinverseButton = document.querySelector("#hincot");
        cothyperinverseButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String(0.5 * Math.log((Number(calculatorDisplay.textContent) + 1) / (Number(calculatorDisplay.textContent) - 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var sechyperinverseButton = document.querySelector("#hinsec");
        sechyperinverseButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String(1 / Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) - 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var cschyperinverseButton = document.querySelector("#hincsc");
        cschyperinverseButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String(Math.log((1 / Number(calculatorDisplay.textContent)) + Math.sqrt((1 / (Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent))) + 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var tanhyperinverseButton = document.querySelector("#hintan");
        tanhyperinverseButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String(0.5 * Math.log((1 + Number(calculatorDisplay.textContent)) / (1 - Number(calculatorDisplay.textContent))));
        });
    });
    // for Hyper Inverse Trigonometry functions End
    // Trigonometry function End
    // Functions start
    document.addEventListener('DOMContentLoaded', function () {
        var ceilButton = document.querySelector("#ceil");
        ceilButton.addEventListener("click", function () {
            calculatorDisplay.textContent = Math.ceil(Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var floorButton = document.querySelector("#floor");
        floorButton.addEventListener("click", function () {
            calculatorDisplay.textContent = Math.floor(Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var randomButton = document.querySelector("#random");
        randomButton.addEventListener("click", function () {
            calculatorDisplay.textContent = String(Math.random());
        });
    });
    // Function End
    eraseButton.addEventListener("click", function () {
        var _a;
        calculatorDisplay.textContent = "";
        calculatorDomArray.pop();
        var tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');
        for (var i = 0; i < calculatorDomArray.length; i++) {
            var currentElement = calculatorDomArray[i];
            if (currentElement instanceof HTMLElement) {
                tempSpan.append((_a = currentElement.textContent) !== null && _a !== void 0 ? _a : "");
                calculatorDisplay.append(tempSpan);
            }
        }
        characterCounter--;
        if (characterCounter < 0) {
            characterCounter = +tempcharacterCounter;
        }
    });
    eraseAll.addEventListener("click", function () {
        calculatorDisplay.textContent = "";
        calculatorDomArray = [];
        characterCounter = 0;
    });
    equalButton.addEventListener("click", function () {
        // all the calculator used function
        var openParenthesisSign = 0;
        var openParenthesisCounter = 0;
        var closedParenthesisCounter = 0;
        calculatorArray = calculatorDisplay.textContent.split("");
        uniteCharacter();
        parseCalculatorArray();
        expfunction();
        squrerootfunction();
        logyxfunction();
        while (/[\(\)]/.test(calculatorArray.join(""))) {
            solveMultiplicationAndDivisionInParenthesis();
            solveAdditionsAndSubtractionInParenthesis();
            // crash preventing
            while (/NaN/.test(calculatorArray.toString())) {
                errorhandler();
                break;
            }
            for (var i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(") {
                    openParenthesisCounter++;
                    openParenthesisSign = i;
                }
                if (calculatorArray[i] === ")") {
                    closedParenthesisCounter++;
                }
            }
            // count how many parentheses the user has inserted 
            if (openParenthesisCounter !== closedParenthesisCounter) {
                errorhandler();
                break;
            }
            else if (openParenthesisCounter === closedParenthesisCounter && calculatorArray[openParenthesisSign + 1] === ")") {
                errorhandler();
                break;
            }
        }
        while (/[*/+\-%^]/.test(calculatorArray.join("")) || calculatorArray.some(function (x) { return typeof x === "number" && x < 0; }) || (calculatorArray.length !== 1 && !calculatorArray.every(function (x) { return typeof x === "number"; }))) {
            solveMultiplicationAndDivision(calculatorArray);
            solveAdditionsAndSubtraction(calculatorArray);
            solvedmod();
            exponent();
        }
        appendResult();
        // calculator logic
        // function used to unite into number all the string 
        function uniteCharacter() {
            var counter = 0;
            while (calculatorArray[counter + 1] !== undefined) {
                try {
                    if (isNaN(parseFloat(calculatorArray[counter].toString())) && calculatorArray[counter] !== "-") {
                        counter++;
                    }
                    else if (isNaN(parseFloat(calculatorArray[counter].toString())) === false || calculatorArray[counter] === "-") {
                        if (isNaN(parseFloat(calculatorArray[counter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                            var numberCounter = counter;
                            while (isNaN(parseFloat(calculatorArray[numberCounter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                                calculatorArray[numberCounter] = "".concat(calculatorArray[numberCounter]).concat(calculatorArray[numberCounter + 1]);
                                calculatorArray.splice(numberCounter + 1, 1);
                            }
                        }
                        else {
                            counter++;
                        }
                    }
                }
                catch (e) {
                    counter--;
                    break;
                }
            }
            console.log(calculatorArray);
            calculatorArray[calculatorArray.length - 1] = calculatorArray[calculatorArray.length - 1].replace('undefined', '');
        }
        // function to parse all the string into number
        function parseCalculatorArray() {
            for (var i = 0; i < calculatorArray.length; i++) {
                if (isNaN(parseFloat(calculatorArray[i].toString())) === false) {
                    calculatorArray[i] = parseFloat(calculatorArray[i].toString());
                }
            }
        }
    });
    // function used to prevent the browser from crashing when the user insert something wrong 
    function errorhandler() {
        alert("You have insert something wrong, pls retry");
        alert("don't do something like 33(22+44)");
    }
    // function used to solve first all the multiplicatio in parenthesis
    function solveMultiplicationAndDivisionInParenthesis() {
        do {
            for (var j = calculatorArray.length - 1; j >= 0; j--) {
                if (calculatorArray[j] === ")") {
                    finalParenthesis = j;
                    break;
                }
            }
            for (var i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(" && i < finalParenthesis) {
                    parenthesisCounter = i;
                    if (typeof parenthesisCounter === 'number') {
                        counter = parenthesisCounter + 1;
                    }
                }
            }
            for (var i = parenthesisCounter; i < finalParenthesis; i++) {
                if (calculatorArray[i] === "*" || calculatorArray[i] === "/") {
                    toLoop = true;
                    break;
                }
                else {
                    toLoop = false;
                }
            }
            if (typeof counter === "number") {
                while (counter < finalParenthesis) {
                    counter++;
                    // iterate trought the parenthesis
                    for (var i = parenthesisCounter; i < finalParenthesis; i++) {
                        multiplyDivide(operatorChecker);
                    }
                }
            }
        } while (toLoop === true && /\(|\)/.test(calculatorArray.join('')));
    }
    // function solveMultiplicationAndDivisionInParenthesis() {
    //     let finalParenthesis: number = 0;
    //     let hasOpenParenthesis = false;
    //     let hasClosedParenthesis = false;
    //     for (let i = 0; i < calculatorArray.length; i++) {
    //     if (calculatorArray[i] === "(") {
    //         hasOpenParenthesis = true;
    //     }
    //     if (calculatorArray[i] === ")") {
    //         hasClosedParenthesis = true;
    //     }
    //     }
    //     if (hasOpenParenthesis && hasClosedParenthesis) {
    //         // Find the innermost pair of parentheses
    //         for (let j = calculatorArray.length - 1; j >= 0; j--) {
    //             if (calculatorArray[j] === ")") {
    //             finalParenthesis = j;
    //             break;
    //             }
    //         }
    //         let parenthesisCounter: number | undefined;
    //         let counter: number | undefined;
    //         for (let i = 0; i < calculatorArray.length; i++) {
    //             if (calculatorArray[i] === "(" && i < finalParenthesis) {
    //             parenthesisCounter = i;
    //             counter = parenthesisCounter + 1;
    //             }
    //         }
    //         if (typeof counter === "number") {
    //             let toLoop: boolean = true;
    //             while (toLoop === true && counter < finalParenthesis) {
    //             toLoop = false;
    //             for (let i = counter; i < finalParenthesis; i++) {
    //                 if (calculatorArray[i] === "*" || calculatorArray[i] === "/") {
    //                 toLoop = true;
    //                 break;
    //                 }
    //             }
    //             if (toLoop === true) {
    //                 multiplyDivide(counter);
    //                 sumSubtract(counter);
    //             }
    //             }
    //             // Remove the parentheses and their contents
    //             if (typeof parenthesisCounter === 'number') {
    //                 calculatorArray.splice(parenthesisCounter, finalParenthesis - parenthesisCounter + 1);
    //             }
    //         }
    //     }
    //   }      
    function multiplyDivide(operatorChecker) {
        var operations = [
            { symbol: "*", perform: function (a, b) { return a * b; } },
            { symbol: "/", perform: function (a, b) { return a / b; } },
        ];
        var i = 0;
        while (i < calculatorArray.length) {
            var currSymbol = calculatorArray[i];
            var prevSymbol = calculatorArray[i - 1];
            var nextSymbol = calculatorArray[i + 1];
            if (prevSymbol !== ")" && nextSymbol !== "(") {
                for (var _i = 0, operations_1 = operations; _i < operations_1.length; _i++) {
                    var operation = operations_1[_i];
                    if (currSymbol === operation.symbol) {
                        calculatorArray[i - 1] = operation.perform(Number(calculatorArray[i - 1]), Number(calculatorArray[i + 1]));
                        calculatorArray.splice(i, 2);
                        i--;
                    }
                }
            }
            if (i >= 0 && calculatorArray[i - 1] === "(" && !isNaN(parseFloat(String(currSymbol))) && nextSymbol === ")") {
                calculatorArray.splice(i - 1, 1);
                i--;
                calculatorArray.splice(i + 1, 1);
                i--;
            }
            i++;
        }
    }
    // function used to add and subtract in pharenthesis
    function solveAdditionsAndSubtractionInParenthesis() {
        var openParenthesisIndex = calculatorArray.indexOf("(");
        var closeParenthesisIndex = calculatorArray.lastIndexOf(")");
        while (openParenthesisIndex !== -1 && closeParenthesisIndex !== -1) {
            var finalParenthesis_1 = closeParenthesisIndex;
            var parenthesisCounter_1 = -1;
            for (var i = finalParenthesis_1 - 1; i >= openParenthesisIndex; i--) {
                if (calculatorArray[i] === "(") {
                    parenthesisCounter_1 = i;
                    break;
                }
            }
            if (parenthesisCounter_1 !== -1) {
                var counter_1 = parenthesisCounter_1 + 1;
                var toLoop_1 = false;
                for (var i = parenthesisCounter_1 + 1; i < finalParenthesis_1; i++) {
                    if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                        toLoop_1 = true;
                        break;
                    }
                }
                while (toLoop_1 && counter_1 < finalParenthesis_1) {
                    counter_1 = sumSubtractforaddandsubtract(counter_1, parenthesisCounter_1, finalParenthesis_1);
                }
            }
            openParenthesisIndex = calculatorArray.indexOf("(", openParenthesisIndex + 1);
            closeParenthesisIndex = calculatorArray.lastIndexOf(")", closeParenthesisIndex - 1);
        }
    }
    function sumSubtractforaddandsubtract(operatorChecker, parenthesisCounter, finalParenthesis) {
        var operator = "+";
        var result = 0;
        for (var i = operatorChecker; i < finalParenthesis; i++) {
            if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                operator = calculatorArray[i];
            }
            else {
                var value = parseInt(calculatorArray[i].toString());
                if (operator === "+") {
                    result += value;
                }
                else {
                    result -= value;
                }
            }
        }
        calculatorArray.splice(parenthesisCounter, finalParenthesis - parenthesisCounter + 1, result.toString());
        return parenthesisCounter;
    }
    function sumSubtract(operatorIndex) {
        var hasOpenParenthesis = checkForOpenParenthesis();
        var hasNegativeNumber = checkForNegativeNumber(operatorIndex);
        if (hasOpenParenthesis && hasNegativeNumber) {
            performArithmeticOperation(operatorIndex, Number(calculatorArray[operatorIndex - 1]) + Number(calculatorArray[operatorIndex + 1]));
        }
        else if (hasOpenParenthesis && calculatorArray[operatorIndex] === "+") {
            performArithmeticOperation(operatorIndex, Number(calculatorArray[operatorIndex - 1]) + Number(calculatorArray[operatorIndex + 1]));
        }
        else if (hasOpenParenthesis && calculatorArray[operatorIndex] === "-") {
            performArithmeticOperation(operatorIndex, Number(calculatorArray[operatorIndex - 1]) - Number(calculatorArray[operatorIndex + 1]));
        }
        else {
            removeNegativeNumberInParentheses();
        }
    }
    function checkForOpenParenthesis() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "(") {
                return true;
            }
        }
        return false;
    }
    function checkForNegativeNumber(operatorIndex) {
        var leftOperand = calculatorArray[operatorIndex - 1];
        var rightOperand = calculatorArray[operatorIndex + 1];
        return leftOperand !== ")" && rightOperand < 0 && leftOperand !== "(";
    }
    function performArithmeticOperation(operatorIndex, result) {
        calculatorArray[operatorIndex - 1] = result;
        calculatorArray.splice(operatorIndex, 2);
    }
    function removeNegativeNumberInParentheses() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i - 1] === "(" && !isNaN(parseFloat(calculatorArray[i].toString())) && calculatorArray[i + 1] === ")") {
                calculatorArray.splice(i - 1, 1);
                i--;
                calculatorArray.splice(i + 1, 1);
                i--;
            }
        }
    }
    // solve multiplication and division that are outside of the parenthesis
    function solveMultiplicationAndDivision(calculatorArray) {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "*") {
                calculatorArray[i - 1] = calculatorArray[i - 1] * calculatorArray[i + 1];
                calculatorArray.splice(i, 2);
            }
            if (calculatorArray[i] === "/") {
                calculatorArray[i - 1] = calculatorArray[i - 1] / calculatorArray[i + 1];
                calculatorArray.splice(i, 2);
            }
            function arrayContains(arr, val) {
                return arr.indexOf(val) !== -1;
            }
            if (i === calculatorArray.length - 1 && (arrayContains(calculatorArray, "*") || arrayContains(calculatorArray, "/"))) {
                i = 0;
            }
        }
    }
    // solve addition and subtraction that are outside of the parenthesis
    function solveAdditionsAndSubtraction(calculatorArray) {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "+") {
                calculatorArray[i - 1] = calculatorArray[i - 1] + calculatorArray[i + 1];
                calculatorArray.splice(i, 2);
            }
            if (calculatorArray[i - 1] !== undefined && typeof calculatorArray[i] === "number" && calculatorArray[i] < 0) {
                calculatorArray[i - 1] = calculatorArray[i - 1] + calculatorArray[i];
                calculatorArray.splice(i, 1);
            }
        }
    }
    function solvedmod() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "%") {
                calculatorArray[i - 1] = Number(calculatorArray[i - 1]) % Number(calculatorArray[i + 1]);
                calculatorArray.splice(i, 2);
            }
        }
    }
    function exponent() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "^") {
                calculatorArray[i - 1] = Math.pow(Number(calculatorArray[i - 1]), Number(calculatorArray[i + 1]));
                calculatorArray.splice(i, 2);
            }
        }
    }
    function expfunction() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "e") {
                calculatorArray[i - 1] = Number(calculatorArray[0]) * Math.pow(10, calculatorArray[calculatorArray.length - 1]);
            }
        }
    }
    function squrerootfunction() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "√") {
                calculatorArray[i - 1] = Math.pow(Number(calculatorArray[calculatorArray.length - 1]), 1 / Number(calculatorArray[0]));
            }
        }
    }
    function logyxfunction() {
        for (var i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "y" && calculatorArray[i + 1] === "l" && calculatorArray[i + 2] === "o" && calculatorArray[i + 3] === "g") {
                calculatorArray[i - 1] = Math.log(Number(calculatorArray[calculatorArray.length - 1])) / Math.log(Number(calculatorArray[0]));
            }
        }
    }
    // For Memory functions
    document.addEventListener('DOMContentLoaded', function () {
        var memorysaveButton = document.querySelector('#memorysave');
        memorysaveButton.addEventListener("click", function () {
            memorysave();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var memoryclearButton = document.querySelector('#memoryclear');
        memoryclearButton.addEventListener("click", function () {
            memoryclear();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var memoryrecallButton = document.querySelector('#memoryrecall');
        memoryrecallButton.addEventListener("click", function () {
            memoryrecall();
        });
    });
    document.addEventListener('DOMContentLoaded', function () {
        var memoryplusButton = document.querySelector('#memoryplus');
        memoryplusButton.addEventListener("click", function () {
            memoryplus();
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var memoryminusButton = document.querySelector('#memoryminus');
        memoryminusButton.addEventListener("click", function () {
            memoryminus();
        });
    });
    function enablemcmr() {
        document.getElementById('memoryclear').disabled = false;
        document.getElementById('memoryrecall').disabled = false;
    }
    function memoryminus() {
        enablemcmr();
        if (memory.length == 0) {
            memory.push(parseFloat(calculatorDisplay.textContent));
        }
        else {
            memory[memory.length - 1] = Number(memory[memory.length - 1]) - parseFloat(calculatorDisplay.textContent);
        }
    }
    function memoryplus() {
        enablemcmr();
        if (memory.length == 0) {
            memory.push(parseFloat(calculatorDisplay.textContent));
        }
        else {
            memory[memory.length - 1] = Number(memory[memory.length - 1]) + parseFloat(calculatorDisplay.textContent);
        }
    }
    function memorysave() {
        console.log("memory before:", memory);
        enablemcmr();
        var input = calculatorDisplay.textContent.trim();
        if (!/^\d+(\.\d+)?$/.test(input)) {
            alert("Enter a number");
        }
        else {
            if (!memory) {
                console.log("memory was undefined, initializing...");
                memory = [];
            }
            memory.push(Number(input));
        }
    }
    function memoryclear() {
        memory = [];
        document.getElementById('memoryclear').disabled = true;
        document.getElementById('memoryrecall').disabled = true;
    }
    function memoryrecall() {
        calculatorDisplay.textContent = memory[memory.length - 1].toString();
    }
    //Memory functions End 
    function appendResult() {
        calculatorDisplay.textContent = "";
        calculatorDomArray = [];
        var tempSpan = document.createElement("span");
        tempSpan.append(calculatorArray[0].toString());
        tempSpan.classList.add('colored-text');
        calculatorDisplay.append(tempSpan);
    }
    // end of the function
}
