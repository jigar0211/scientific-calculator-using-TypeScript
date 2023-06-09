const calculatorDisplay = document.querySelector(".display-container");
const numberButtons = document.querySelectorAll('.number-button');
// operator
const openParenthesis = document.querySelector("#opened-parenthesis");
const closedParenthesis = document.querySelector("#closed-parenthesis");
const eraseAll = document.querySelector("#erase-all-sign");
const eraseButton = document.querySelector("#erase-button");
const divideButton = document.querySelector("#split-operator");
const multiplicationButton = document.querySelector("#multiplication-operator");
const lessButton = document.querySelector("#less-operator");
const plusButton = document.querySelector("#plus-operator");
const decimalButton = document.querySelector("#decimal-operator");
const equalButton = document.querySelector("#equal-button");
const moduloButton = document.querySelector('#modulo');
const exponentButton = document.querySelector('#exponent');
const plusminusButton = document.querySelector('#plusminus');
const xsqureButton = document.querySelector("#xsqure");
// calculator array
let calculatorArray = [];
let calculatorDomArray = [];
// other variable 
let degrad = 1; // or false, depending on your needs
let memory = [];
let operatorChecker;
let fe = 1;
let inv_trigo = 1;
let hyp_trigo = 1;
let flag = 1;
let secondval = true;
let tempSpan;
let counter;
let parenthesisCounter;
let finalParenthesis;
let toLoop = false;
// this variable is used to save how many time the user click a number before an operator, that's for the purpose of blocking the user to make numbers larger than 15 digits
let characterCounter = 0;
let tempcharacterCounter;
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
    numberButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (characterCounter < 16) {
                characterCounter++;
                appendNumber(button.value);
            }
        });
    });
    const buttons = [
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
    buttons.forEach((button) => {
        button.element.addEventListener("click", () => {
            tempcharacterCounter = characterCounter;
            characterCounter = 0;
            appendNumber(button.value);
        });
    });
    // for 2nd Button Start
    const secondbutton = document.querySelector("#secondbtn");
    let flag = 1;
    secondbutton.addEventListener("click", () => {
        const firstValues = document.getElementsByClassName('firstvalue');
        const secondValues = document.getElementsByClassName('secondvalue');
        if (flag === 1) {
            for (let i = 0; i < firstValues.length; i++) {
                firstValues.item(i).style.display = "none";
            }
            for (let i = 0; i < secondValues.length; i++) {
                secondValues.item(i).style.display = "inline-block";
            }
            flag = 0;
        }
        else {
            for (let i = 0; i < secondValues.length; i++) {
                secondValues.item(i).style.display = "none";
            }
            for (let i = 0; i < firstValues.length; i++) {
                firstValues.item(i).style.display = "inline-block";
            }
            flag = 1;
        }
    });
    // for 2nd Button End 
    // Change Deg to RAD start
    document.addEventListener('DOMContentLoaded', () => {
        const degButton = document.querySelector('#deg');
        degButton.addEventListener("click", () => {
            if (degrad == 1) {
                const degElement = document.querySelector('#deg');
                degElement.innerHTML = "RAD";
                degrad = 0;
            }
            else {
                const degElement = document.querySelector('#deg');
                degElement.innerHTML = 'DEG';
                degrad = 1;
            }
        });
    });
    // Change Deg to RAD End
    // For F-E Button Start
    document.addEventListener("DOMContentLoaded", () => {
        const feButton = document.querySelector("#febtn");
        feButton.addEventListener("click", () => {
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
    document.addEventListener('DOMContentLoaded', () => {
        const sigchangeButton = document.querySelector("#sigchange");
        sigchangeButton.addEventListener("click", () => {
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
    document.addEventListener('DOMContentLoaded', () => {
        const factorialButton = document.querySelector("#factorial");
        if (factorialButton) {
            factorialButton.addEventListener("click", () => {
                if (Number(calculatorDisplay.textContent) < 0) {
                    return NaN; // Error: factorial of negative number is undefined
                }
                if (calculatorDisplay.textContent === "0" || calculatorDisplay.textContent === "1") {
                    return calculatorDisplay.textContent = "1"; // Base case: factorial of 0 or 1 is 1
                }
                let result = 1;
                for (let i = 2; i <= Number(calculatorDisplay.textContent); i++) {
                    result *= i;
                }
                return calculatorDisplay.textContent = String(result);
            });
        }
    });
    document.addEventListener('DOMContentLoaded', () => {
        const oneuponxButton = document.querySelector("#oneuponx");
        oneuponxButton.addEventListener("click", () => {
            calculatorDisplay.textContent = (1 / Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const lnButton = document.getElementById('ln');
        lnButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                let num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.log(num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const logButton = document.getElementById('log');
        logButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                const num = Number(calculatorDisplay.textContent);
                const log10Num = Math.log(num) / Math.log(10);
                calculatorDisplay.textContent = String(log10Num);
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tenrestoxButton = document.getElementById('tenrestox');
        tenrestoxButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                let num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.pow(10, num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const xsqureButton = document.querySelector('#xsqure');
        xsqureButton.addEventListener('click', () => {
            if (calculatorDisplay.textContent !== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 2).toString();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const xcubeButton = document.querySelector("#xcube");
        xcubeButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 3).toString();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cbrtButton = document.querySelector("#cbrt");
        cbrtButton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(num, 1 / 3));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const sqrtButton = document.querySelector("#sqrt");
        sqrtButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                let num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.sqrt(num));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const modxButton = document.querySelector("#modx");
        modxButton.addEventListener("click", () => {
            var _a;
            if (((_a = calculatorDisplay.textContent) === null || _a === void 0 ? void 0 : _a.charAt(0)) === "-") {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tworesxButton = document.querySelector("#tworesx");
        tworesxButton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(2, num));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const eraisedtoxButtton = document.querySelector("#eraisedtox");
        eraisedtoxButtton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent);
            calculatorDisplay.textContent = String(Math.pow(2.718281828459045, num));
        });
    });
    // Trigono inverse and trigono hyper change button Start
    document.addEventListener("DOMContentLoaded", () => {
        const trignosecondButton = document.querySelector("#trigonosecond");
        trignosecondButton.addEventListener("click", () => {
            if (inv_trigo) {
                inv_trigo = 0;
            }
            else {
                inv_trigo = 1;
            }
            change_trigo_func();
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const trignohuperButton = document.querySelector("#trigonohyper");
        trignohuperButton.addEventListener("click", () => {
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
            const trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "flex";
            ;
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 1 && hyp_trigo == 1) {
            const trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "flex";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 0 && hyp_trigo === 0) {
            const trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "flex";
        }
        else {
            const trigoFuncElement = document.getElementById('trigo_func');
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func');
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func');
            hypTrigoFuncElement.style.display = "flex";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func');
            hypInverseTrigoFuncElement.style.display = "none";
        }
    }
    // Trigono inverse and trigono hyper change button End
    // Trigonometry function start
    document.addEventListener('DOMContentLoaded', () => {
        const sinButton = document.querySelector("#sin");
        sinButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.sin((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.sin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cosButton = document.querySelector("#cos");
        cosButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.cos((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.cos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cotButton = document.querySelector("#cot");
        cotButton === null || cotButton === void 0 ? void 0 : cotButton.addEventListener('click', () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.tan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.tan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cosecButton = document.querySelector("#csc");
        cosecButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.sin(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.sin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const secButton = document.querySelector('#sec');
        secButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.cos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.cos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tanButton = document.querySelector("#tan");
        tanButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.tan((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.tan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    // for Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', () => {
        const sininverseButton = document.querySelector("#insin");
        sininverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.asin((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.asin(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cosinverseButton = document.querySelector("#incos");
        cosinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.acos((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            }
            else {
                calculatorDisplay.textContent = String(Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cotinverseButton = document.querySelector("#incot");
        cotinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.atan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.atan(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const secinverseButton = document.querySelector("#insec");
        secinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.acos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cscinverseButton = document.querySelector("#incsc");
        cscinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.asin(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const taninverseButton = document.querySelector("#intan");
        taninverseButton.addEventListener("click", () => {
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
    document.addEventListener('DOMContentLoaded', () => {
        const sinhyperButton = document.querySelector("#hsin");
        sinhyperButton.addEventListener("click", () => {
            let x = Number(calculatorDisplay.textContent);
            let result = (Math.exp(x) - Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(result);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const coshyperButton = document.querySelector("#hcos");
        coshyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String((Math.exp(Number(calculatorDisplay.textContent)) + Math.exp(-Number(calculatorDisplay.textContent))) / 2);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cothyperButton = document.querySelector("#hcot");
        cothyperButton.addEventListener("click", () => {
            const input = calculatorDisplay.textContent;
            if (input !== null) {
                const x = Number(input);
                calculatorDisplay.textContent = String((Math.exp(x) + Math.exp(-x)) / (Math.exp(x) - Math.exp(-x)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const sechyperButton = document.querySelector("#hsec");
        sechyperButton.addEventListener("click", () => {
            const x = Number(calculatorDisplay.textContent);
            const cosh = (Math.exp(x) + Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(cosh);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cschyperButton = document.querySelector("#hcsc");
        cschyperButton.addEventListener("click", () => {
            const x = Number(calculatorDisplay.textContent);
            const sinh = (Math.exp(x) - Math.exp(-x)) / 2;
            calculatorDisplay.textContent = String(sinh);
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tanhyperButton = document.querySelector("#htan");
        tanhyperButton.addEventListener("click", () => {
            const x = Number(calculatorDisplay.textContent);
            const tanh = (Math.exp(x) - Math.exp(-x)) / (Math.exp(x) + Math.exp(-x));
            calculatorDisplay.textContent = String(tanh);
        });
    });
    // for Hyper Trigonometry functions End
    // for Hyper Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', () => {
        const sinhyperinverseButton = document.querySelector("#hinsin");
        sinhyperinverseButton.addEventListener("click", () => {
            Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) + 1));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const coshyperinverseButton = document.querySelector("#hincos");
        coshyperinverseButton.addEventListener("click", () => {
            Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) - 1));
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const cothyperinverseButton = document.querySelector("#hincot");
        cothyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(0.5 * Math.log((Number(calculatorDisplay.textContent) + 1) / (Number(calculatorDisplay.textContent) - 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const sechyperinverseButton = document.querySelector("#hinsec");
        sechyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(1 / Math.log(Number(calculatorDisplay.textContent) + Math.sqrt((Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent)) - 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cschyperinverseButton = document.querySelector("#hincsc");
        cschyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.log((1 / Number(calculatorDisplay.textContent)) + Math.sqrt((1 / (Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent))) + 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tanhyperinverseButton = document.querySelector("#hintan");
        tanhyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(0.5 * Math.log((1 + Number(calculatorDisplay.textContent)) / (1 - Number(calculatorDisplay.textContent))));
        });
    });
    // for Hyper Inverse Trigonometry functions End
    // Trigonometry function End
    // Functions start
    document.addEventListener('DOMContentLoaded', () => {
        const ceilButton = document.querySelector("#ceil");
        ceilButton.addEventListener("click", () => {
            calculatorDisplay.textContent = Math.ceil(Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const floorButton = document.querySelector("#floor");
        floorButton.addEventListener("click", () => {
            calculatorDisplay.textContent = Math.floor(Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const randomButton = document.querySelector("#random");
        randomButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.random());
        });
    });
    // Function End
    eraseButton.addEventListener("click", () => {
        var _a;
        calculatorDisplay.textContent = "";
        calculatorDomArray.pop();
        const tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');
        for (let i = 0; i < calculatorDomArray.length; i++) {
            const currentElement = calculatorDomArray[i];
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
    eraseAll.addEventListener("click", () => {
        calculatorDisplay.textContent = "";
        calculatorDomArray = [];
        characterCounter = 0;
    });
    equalButton.addEventListener("click", () => {
        // all the calculator used function
        let openParenthesisSign = 0;
        let openParenthesisCounter = 0;
        let closedParenthesisCounter = 0;
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
            for (let i = 0; i < calculatorArray.length; i++) {
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
        while (/[*/+\-%^]/.test(calculatorArray.join("")) || calculatorArray.some((x) => typeof x === "number" && x < 0) || (calculatorArray.length !== 1 && !calculatorArray.every((x) => typeof x === "number"))) {
            solveMultiplicationAndDivision(calculatorArray);
            solveAdditionsAndSubtraction(calculatorArray);
            solvedmod();
            exponent();
        }
        appendResult();
        // calculator logic
        // function used to unite into number all the string 
        function uniteCharacter() {
            let counter = 0;
            while (calculatorArray[counter + 1] !== undefined) {
                try {
                    if (isNaN(parseFloat(calculatorArray[counter].toString())) && calculatorArray[counter] !== "-") {
                        counter++;
                    }
                    else if (isNaN(parseFloat(calculatorArray[counter].toString())) === false || calculatorArray[counter] === "-") {
                        if (isNaN(parseFloat(calculatorArray[counter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                            let numberCounter = counter;
                            while (isNaN(parseFloat(calculatorArray[numberCounter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                                calculatorArray[numberCounter] = `${calculatorArray[numberCounter]}${calculatorArray[numberCounter + 1]}`;
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
            for (let i = 0; i < calculatorArray.length; i++) {
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
            for (let j = calculatorArray.length - 1; j >= 0; j--) {
                if (calculatorArray[j] === ")") {
                    finalParenthesis = j;
                    break;
                }
            }
            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(" && i < finalParenthesis) {
                    parenthesisCounter = i;
                    if (typeof parenthesisCounter === 'number') {
                        counter = parenthesisCounter + 1;
                    }
                }
            }
            for (let i = parenthesisCounter; i < finalParenthesis; i++) {
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
                    for (let i = parenthesisCounter; i < finalParenthesis; i++) {
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
        const operations = [
            { symbol: "*", perform: (a, b) => a * b },
            { symbol: "/", perform: (a, b) => a / b },
        ];
        let i = 0;
        while (i < calculatorArray.length) {
            const currSymbol = calculatorArray[i];
            const prevSymbol = calculatorArray[i - 1];
            const nextSymbol = calculatorArray[i + 1];
            if (prevSymbol !== ")" && nextSymbol !== "(") {
                for (const operation of operations) {
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
        let openParenthesisIndex = calculatorArray.indexOf("(");
        let closeParenthesisIndex = calculatorArray.lastIndexOf(")");
        while (openParenthesisIndex !== -1 && closeParenthesisIndex !== -1) {
            let finalParenthesis = closeParenthesisIndex;
            let parenthesisCounter = -1;
            for (let i = finalParenthesis - 1; i >= openParenthesisIndex; i--) {
                if (calculatorArray[i] === "(") {
                    parenthesisCounter = i;
                    break;
                }
            }
            if (parenthesisCounter !== -1) {
                let counter = parenthesisCounter + 1;
                let toLoop = false;
                for (let i = parenthesisCounter + 1; i < finalParenthesis; i++) {
                    if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                        toLoop = true;
                        break;
                    }
                }
                while (toLoop && counter < finalParenthesis) {
                    counter = sumSubtractforaddandsubtract(counter, parenthesisCounter, finalParenthesis);
                }
            }
            openParenthesisIndex = calculatorArray.indexOf("(", openParenthesisIndex + 1);
            closeParenthesisIndex = calculatorArray.lastIndexOf(")", closeParenthesisIndex - 1);
        }
    }
    function sumSubtractforaddandsubtract(operatorChecker, parenthesisCounter, finalParenthesis) {
        let operator = "+";
        let result = 0;
        for (let i = operatorChecker; i < finalParenthesis; i++) {
            if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                operator = calculatorArray[i];
            }
            else {
                let value = parseInt(calculatorArray[i].toString());
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
        const hasOpenParenthesis = checkForOpenParenthesis();
        const hasNegativeNumber = checkForNegativeNumber(operatorIndex);
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
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "(") {
                return true;
            }
        }
        return false;
    }
    function checkForNegativeNumber(operatorIndex) {
        const leftOperand = calculatorArray[operatorIndex - 1];
        const rightOperand = calculatorArray[operatorIndex + 1];
        return leftOperand !== ")" && rightOperand < 0 && leftOperand !== "(";
    }
    function performArithmeticOperation(operatorIndex, result) {
        calculatorArray[operatorIndex - 1] = result;
        calculatorArray.splice(operatorIndex, 2);
    }
    function removeNegativeNumberInParentheses() {
        for (let i = 0; i < calculatorArray.length; i++) {
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
        for (let i = 0; i < calculatorArray.length; i++) {
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
        for (let i = 0; i < calculatorArray.length; i++) {
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
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "%") {
                calculatorArray[i - 1] = Number(calculatorArray[i - 1]) % Number(calculatorArray[i + 1]);
                calculatorArray.splice(i, 2);
            }
        }
    }
    function exponent() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "^") {
                calculatorArray[i - 1] = Math.pow(Number(calculatorArray[i - 1]), Number(calculatorArray[i + 1]));
                calculatorArray.splice(i, 2);
            }
        }
    }
    function expfunction() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "e") {
                calculatorArray[i - 1] = Number(calculatorArray[0]) * Math.pow(10, calculatorArray[calculatorArray.length - 1]);
            }
        }
    }
    function squrerootfunction() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "√") {
                calculatorArray[i - 1] = Math.pow(Number(calculatorArray[calculatorArray.length - 1]), 1 / Number(calculatorArray[0]));
            }
        }
    }
    function logyxfunction() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "y" && calculatorArray[i + 1] === "l" && calculatorArray[i + 2] === "o" && calculatorArray[i + 3] === "g") {
                calculatorArray[i - 1] = Math.log(Number(calculatorArray[calculatorArray.length - 1])) / Math.log(Number(calculatorArray[0]));
            }
        }
    }
    // For Memory functions
    document.addEventListener('DOMContentLoaded', () => {
        const memorysaveButton = document.querySelector('#memorysave');
        memorysaveButton.addEventListener("click", () => {
            memorysave();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const memoryclearButton = document.querySelector('#memoryclear');
        memoryclearButton.addEventListener("click", () => {
            memoryclear();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const memoryrecallButton = document.querySelector('#memoryrecall');
        memoryrecallButton.addEventListener("click", () => {
            memoryrecall();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const memoryplusButton = document.querySelector('#memoryplus');
        memoryplusButton.addEventListener("click", () => {
            memoryplus();
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const memoryminusButton = document.querySelector('#memoryminus');
        memoryminusButton.addEventListener("click", () => {
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
        const input = calculatorDisplay.textContent.trim();
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
        const tempSpan = document.createElement("span");
        tempSpan.append(calculatorArray[0].toString());
        tempSpan.classList.add('colored-text');
        calculatorDisplay.append(tempSpan);
    }
    // end of the function
}
