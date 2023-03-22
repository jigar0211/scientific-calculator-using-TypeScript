const calculatorDisplay = document.querySelector(".display-container")! as HTMLDivElement;
// numbers
const zero = document.querySelector("#zero") as HTMLButtonElement
const one: HTMLButtonElement = document.getElementById("one")! as HTMLButtonElement;
const two = document.querySelector("#two") as HTMLButtonElement
const three = document.querySelector("#three") as HTMLButtonElement
const four = document.querySelector("#four") as HTMLButtonElement
const five = document.querySelector("#five") as HTMLButtonElement
const six = document.querySelector("#six") as HTMLButtonElement
const seven = document.querySelector("#seven") as HTMLButtonElement
const height = document.querySelector("#eight") as HTMLButtonElement
const nine = document.querySelector("#nine") as HTMLButtonElement
const pi = document.querySelector('#pi') as HTMLButtonElement
const constantE = document.querySelector('#constantE') as HTMLButtonElement
// operator
const openParenthesis = document.querySelector("#opened-parenthesis") as HTMLButtonElement
const closedParenthesis = document.querySelector("#closed-parenthesis") as HTMLButtonElement
const eraseAll = document.querySelector("#erase-all-sign") as HTMLButtonElement
const eraseButton = document.querySelector("#erase-button") as HTMLButtonElement
const divideButton = document.querySelector("#split-operator") as HTMLButtonElement
const multiplicationButton = document.querySelector("#multiplication-operator") as HTMLButtonElement
const lessButton = document.querySelector("#less-operator") as HTMLButtonElement
const plusButton = document.querySelector("#plus-operator") as HTMLButtonElement
const decimalButton = document.querySelector("#decimal-operator") as HTMLButtonElement
const equalButton = document.querySelector("#equal-button") as HTMLButtonElement
const moduloButton = document.querySelector('#modulo') as HTMLButtonElement
const exponentButton = document.querySelector('#exponent') as HTMLButtonElement
const plusminusButton = document.querySelector('#plusminus') as HTMLButtonElement
const xsqureButton = document.querySelector("#xsqure") as HTMLButtonElement
const exp = document.querySelector("#exp") as HTMLButtonElement
const squreroot = document.querySelector("#ysqrx") as HTMLButtonElement
const logyxButton = document.querySelector("#logyx") as HTMLButtonElement
// calculator array
let calculatorArray: (string | number)[] = [];
let calculatorDomArray: (HTMLElement | string | number)[] = [];
// other variable 
let degrad: boolean | number = 1; // or false, depending on your needs
let memory: number[] = [];
let operatorChecker: unknown;
let fe: boolean | number = 1;
let inv_trigo: number = 1
let hyp_trigo: number = 1
let flag: number = 1;
let secondval = true
let tempSpan: HTMLSpanElement | string | number;
let counter: number | string | boolean | null | undefined;
let parenthesisCounter: unknown;
let finalParenthesis: number | string
let toLoop = false
// this variable is used to save how many time the user click a number before an operator, that's for the purpose of blocking the user to make numbers larger than 15 digits
let characterCounter: number = 0;
let tempcharacterCounter: number | string

eventFunction()
function eventFunction() {
    // append function
    function appendNumber(number: string | number): void {
        // create span container function
        tempSpan = document.createElement('span');
        tempSpan.classList.add('colored-text');
        tempSpan.textContent = String(number);
        calculatorDomArray.push(tempSpan)
        calculatorDisplay.append(tempSpan);
    }

    // number event listener
    one.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++;
            appendNumber(1);
        }
    });
    two.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(2)
        }
    })
    three.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(3)
        }
    })
    four.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(4)
        }
    })
    five.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(5)
        }
    })
    six.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(6)
        }
    })
    seven.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(7)
        }
    })
    height.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(8)
        }
    })
    nine.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(9)
        }
    })
    zero.addEventListener("click", () => {
        if (characterCounter < 16) {
            characterCounter++
            appendNumber(0)
        }
    })
    pi.addEventListener("click", () => {
        if(characterCounter < 1) {
            characterCounter++
            appendNumber(3.14)
        }
    })
    constantE.addEventListener("click", () => {
        if(characterCounter < 1) {
            characterCounter++
            appendNumber(2.718281828459045)
        }
    })
    // operator event listener 
    decimalButton.addEventListener("click", () => {
        characterCounter++
        appendNumber(".")
    })
    plusButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("+")
    })
    lessButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("-")
    })
    multiplicationButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("*")
    })
    divideButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("/")
    })
    moduloButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("%")
    })
    exponentButton.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("^")
    })
    exp.addEventListener("click", () => {
        if(characterCounter < 5){
            characterCounter++ 
            appendNumber(".e+")
        }
    })
    squreroot.addEventListener("click", () => {
        if(characterCounter < 5){
            characterCounter++ 
            appendNumber("√")
        }
    })
    logyxButton.addEventListener("click", () => {
        if(characterCounter < 5){
            characterCounter++ 
            appendNumber("ylog")
        }
    })
    openParenthesis.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber("(")
    })
    closedParenthesis.addEventListener("click", () => {
        tempcharacterCounter = characterCounter
        characterCounter = 0
        appendNumber(")")
    })
    // for 2nd Button Start
    const secondbutton = document.querySelector<HTMLButtonElement>("#secondbtn")!
    secondbutton.addEventListener("click",() => {
        if (flag == 1) {
            for (let element of document.getElementsByClassName('firstvalue') as HTMLCollectionOf<Element>) {
              (element as HTMLElement).style.display = "none";
            }
            for (let element of document.getElementsByClassName('secondvalue') as HTMLCollectionOf<Element>) {
              (element as HTMLElement).style.display = "inline-block";
            }
            flag = 0;
          } else {
            for (let element of document.getElementsByClassName('secondvalue') as HTMLCollectionOf<Element>) {
              (element as HTMLElement).style.display = "none";
            }
            for (let element of document.getElementsByClassName('firstvalue') as HTMLCollectionOf<Element>) {
              (element as HTMLElement).style.display = "inline-block";
            }
            flag = 1;
          }
    })
    // for 2nd Button End 
    // Change Deg to RAD start
    document.addEventListener('DOMContentLoaded', () => {
    const degButton = document.querySelector('#deg') as HTMLElement;
    degButton.addEventListener("click", () => {
            if (degrad == 1) {
            const degElement = document.querySelector('#deg') as HTMLElement;
            degElement.innerHTML = "RAD";
            degrad = 0;
            } else {
            const degElement = document.querySelector('#deg') as HTMLElement;
            degElement.innerHTML = 'DEG';
            degrad = 1;
            }
        });
    });
    // Change Deg to RAD End
    // For F-E Button Start
    document.addEventListener("DOMContentLoaded", () => {
        const feButton = document.querySelector<HTMLButtonElement>("#febtn")!
    
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
        const sigchangeButton = document.querySelector<HTMLButtonElement>("#sigchange")!
        sigchangeButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent?.charAt(0) === "-") {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
            } else {
                calculatorDisplay.textContent = "-" + calculatorDisplay.textContent;
            }
        });
    });    
    // Sign Change Button End
    document.addEventListener('DOMContentLoaded', () => {
        const factorialButton = document.querySelector<HTMLButtonElement>("#factorial");
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
    })
    document.addEventListener('DOMContentLoaded', () => {
        const oneuponxButton = document.querySelector<HTMLButtonElement>("#oneuponx")!
        oneuponxButton.addEventListener("click", () => {
            calculatorDisplay.textContent = (1/Number(calculatorDisplay.textContent)).toString();
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const lnButton = document.getElementById('ln') as HTMLButtonElement
        lnButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent !== null) {
                let num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.log(num));
              }              
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const logButton = document.getElementById('log') as HTMLButtonElement
        logButton.addEventListener("click", () => {
            if(calculatorDisplay.textContent !== null){
                let num = Number(calculatorDisplay.textContent);
                calculatorDisplay.textContent = String(Math.log10(num))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const tenrestoxButton = document.getElementById('tenrestox') as HTMLButtonElement
        tenrestoxButton.addEventListener("click", () => {
            if(calculatorDisplay.textContent!== null){
                let num = Number(calculatorDisplay.textContent)
                calculatorDisplay.textContent = String(Math.pow(10, num))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const xsqureButton = document.querySelector<HTMLButtonElement>('#xsqure')!
        xsqureButton.addEventListener('click', () => {
            if (calculatorDisplay.textContent !== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 2).toString();
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const xcubeButton = document.querySelector<HTMLButtonElement>("#xcube")!
        xcubeButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent!== null) {
                calculatorDisplay.textContent = Math.pow(+calculatorDisplay.textContent, 3).toString();
            }
        });
    });    
    document.addEventListener('DOMContentLoaded', () => {
        const cbrtButton = document.querySelector<HTMLButtonElement>("#cbrt")!; 
        cbrtButton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent)
            calculatorDisplay.textContent = String(Math.cbrt(num));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const sqrtButton = document.querySelector("#sqrt") as HTMLButtonElement
        sqrtButton.addEventListener("click", () => {
            if(calculatorDisplay.textContent!== null){
                let num = Number(calculatorDisplay.textContent)
                calculatorDisplay.textContent = String(Math.sqrt(num))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const modxButton = document.querySelector<HTMLButtonElement>("#modx")!
        modxButton.addEventListener("click", () => {
            if (calculatorDisplay.textContent?.charAt(0) === "-") {
                calculatorDisplay.textContent = calculatorDisplay.textContent.slice(1);
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const tworesxButton = document.querySelector<HTMLButtonElement>("#tworesx")!
        tworesxButton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent)
            calculatorDisplay.textContent = String(Math.pow(2, num))
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const eraisedtoxButtton = document.querySelector<HTMLButtonElement>("#eraisedtox")!
        eraisedtoxButtton.addEventListener("click", () => {
            let num = Number(calculatorDisplay.textContent)
            calculatorDisplay.textContent = String(Math.pow(2.718281828459045, num))
        })
    })
    // Trigono inverse and trigono hyper change button Start
    document.addEventListener("DOMContentLoaded", () => {
    const trignosecondButton = document.querySelector<HTMLButtonElement>("#trigonosecond")!
        trignosecondButton.addEventListener("click", () => {
            if(inv_trigo){
                inv_trigo = 0;
            }
            else{
                inv_trigo = 1;
            }
            change_trigo_func();
        });
    });
    document.addEventListener("DOMContentLoaded", () => {
        const trignohuperButton = document.querySelector<HTMLButtonElement>("#trigonohyper")!
        trignohuperButton.addEventListener("click", () => {
            if(hyp_trigo){
                hyp_trigo = 0;
            }
            else{
                hyp_trigo = 1;
            }
            change_trigo_func();
        })
    })
    function change_trigo_func() {
        if (inv_trigo == 0 && hyp_trigo == 1) {
            const trigoFuncElement = document.getElementById('trigo_func') as HTMLElement;
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func') as HTMLElement;
            inverseTrigoFuncElement.style.display = "flex";;
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func') as HTMLElement;
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func') as HTMLElement;
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 1 && hyp_trigo == 1) {
            const trigoFuncElement = document.getElementById('trigo_func') as HTMLElement;
            trigoFuncElement.style.display = "flex";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func') as HTMLElement;
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func') as HTMLElement;
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func') as HTMLElement;
            hypInverseTrigoFuncElement.style.display = "none";
        }
        else if (inv_trigo == 0 && hyp_trigo === 0) {
            const trigoFuncElement = document.getElementById('trigo_func') as HTMLElement;
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func') as HTMLElement;
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func') as HTMLElement;
            hypTrigoFuncElement.style.display = "none";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func') as HTMLElement;
            hypInverseTrigoFuncElement.style.display = "flex";
        }
        else {
            const trigoFuncElement = document.getElementById('trigo_func') as HTMLElement;
            trigoFuncElement.style.display = "none";
            const inverseTrigoFuncElement = document.getElementById('inverse_trigo_func') as HTMLElement;
            inverseTrigoFuncElement.style.display = "none";
            const hypTrigoFuncElement = document.getElementById('hyp_trigo_func') as HTMLElement;
            hypTrigoFuncElement.style.display = "flex";
            const hypInverseTrigoFuncElement = document.getElementById('hyp_inverse_trigo_func') as HTMLElement;
            hypInverseTrigoFuncElement.style.display = "none";
        }
    }
    // Trigono inverse and trigono hyper change button End
    // Trigonometry function start
    document.addEventListener('DOMContentLoaded', () => {
        const sinButton = document.querySelector("#sin") as HTMLButtonElement;
        sinButton.addEventListener("click", () => {
            if(degrad) {
                calculatorDisplay.textContent = String(Math.sin((Math.PI / 180) * Number(calculatorDisplay.textContent)))
            } else {
                calculatorDisplay.textContent = String(Math.sin(Number(calculatorDisplay.textContent)))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cosButton = document.querySelector("#cos") as HTMLButtonElement
        cosButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.cos((Math.PI / 180) * Number(calculatorDisplay.textContent)))
            }else {
                calculatorDisplay.textContent = String(Math.cos(Number(calculatorDisplay.textContent)))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cotButton = document.querySelector<HTMLButtonElement>("#cot")
        cotButton?.addEventListener('click', () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.tan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            }
            else {
                calculatorDisplay.textContent = String(1 / Math.tan(Number(calculatorDisplay.textContent)));
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cosecButton = document.querySelector("#csc") as HTMLButtonElement
        cosecButton.addEventListener("click", () => {
            
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.sin(Math.PI / 180 * Number(calculatorDisplay.textContent))))
            } else {
                calculatorDisplay.textContent = String(1/Math.sin(Number(calculatorDisplay.textContent)))
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const secButton = document.querySelector('#sec') as HTMLButtonElement
        secButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.cos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            } else {
                calculatorDisplay.textContent = String(1/Math.cos(Number(calculatorDisplay.textContent)))
            }
        }) 
    })
    document.addEventListener('DOMContentLoaded', () => {
        const tanButton = document.querySelector("#tan") as HTMLButtonElement
        tanButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.tan((Math.PI / 180) * Number(calculatorDisplay.textContent)))
            } else { 
                calculatorDisplay.textContent = String(Math.tan(Number(calculatorDisplay.textContent)))
            }
        })
    })
    // for Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', () => {
        const sininverseButton = document.querySelector<HTMLButtonElement>("#insin")!
        sininverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.asin((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            } else {
                calculatorDisplay.textContent = String(Math.asin(Number(calculatorDisplay.textContent)));
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cosinverseButton = document.querySelector<HTMLButtonElement>("#incos")! 
        cosinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.acos((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            } else {
                calculatorDisplay.textContent = String(Math.acos(Number(calculatorDisplay.textContent)));
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cotinverseButton = document.querySelector<HTMLButtonElement>("#incot")!
        cotinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.atan(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            } else {
                calculatorDisplay.textContent = String(1 / Math.atan(Number(calculatorDisplay.textContent)));
            }
        })
    })
    document.addEventListener("DOMContentLoaded", () => {
        const secinverseButton = document.querySelector<HTMLButtonElement>("#insec")!
        secinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.acos(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            } else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const cscinverseButton = document.querySelector<HTMLButtonElement>("#incsc")!
        cscinverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(1 / (Math.asin(Math.PI / 180 * Number(calculatorDisplay.textContent))));
            } else {
                calculatorDisplay.textContent = String(1 / Math.acos(Number(calculatorDisplay.textContent)));
            }
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const taninverseButton = document.querySelector<HTMLButtonElement>("#intan")!  
        taninverseButton.addEventListener("click", () => {
            if (degrad) {
                calculatorDisplay.textContent = String(Math.atan((Math.PI / 180) * Number(calculatorDisplay.textContent)));
            } else {
                calculatorDisplay.textContent = String(Math.atan(Number(calculatorDisplay.textContent)));
            }
        })
    })
    // for Inverse Trigonometry functions End
    // for Hyper Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', () => {
        const sinhyperButton = document.querySelector<HTMLButtonElement>("#hsin")!  
        sinhyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.sinh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const coshyperButton = document.querySelector<HTMLButtonElement>("#hcos")! 
        coshyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.cosh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cothyperButton = document.querySelector<HTMLButtonElement>("#hcot")!
        cothyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(1/Math.tanh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const sechyperButton = document.querySelector<HTMLButtonElement>("#hsec")!
        sechyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(1/Math.cosh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cschyperButton = document.querySelector<HTMLButtonElement>("#hcsc")!
        cschyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(1/Math.sinh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const tanhyperButton = document.querySelector<HTMLButtonElement>("#htan")!
        tanhyperButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.tanh(Number(calculatorDisplay.textContent)));
        })
    })
    // for Hyper Trigonometry functions End
    // for Hyper Inverse Trigonometry functions Start
    document.addEventListener('DOMContentLoaded', () => {
        const sinhyperinverseButton = document.querySelector<HTMLButtonElement>("#hinsin")!
        sinhyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.asinh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const coshyperinverseButton = document.querySelector<HTMLButtonElement>("#hincos")!
        coshyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.acosh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener("DOMContentLoaded", () => {
        const cothyperinverseButton = document.querySelector<HTMLButtonElement>("#hincot")!
        cothyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(0.5 * Math.log((Number(calculatorDisplay.textContent) + 1) / (Number(calculatorDisplay.textContent) - 1)));
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const sechyperinverseButton = document.querySelector<HTMLButtonElement>("#hinsec")!
        sechyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(1/Math.acosh(Number(calculatorDisplay.textContent)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const cschyperinverseButton = document.querySelector<HTMLButtonElement>("#hincsc")! 
        cschyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.log((1/ Number(calculatorDisplay.textContent)) + Math.sqrt((1/(Number(calculatorDisplay.textContent) * Number(calculatorDisplay.textContent))) + 1)));
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const tanhyperinverseButton = document.querySelector<HTMLButtonElement>("#hintan")! 
        tanhyperinverseButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(0.5 * Math.log((1 + Number(calculatorDisplay.textContent)) / (1 - Number(calculatorDisplay.textContent))));
        })
    })
    // for Hyper Inverse Trigonometry functions End
    // Trigonometry function End
    // Functions start
    document.addEventListener('DOMContentLoaded', () => {
        const ceilButton = document.querySelector<HTMLButtonElement>("#ceil")!
        ceilButton.addEventListener("click", () => {
            calculatorDisplay.textContent = Math.ceil(Number(calculatorDisplay.textContent)).toString();
        });
    });
    document.addEventListener('DOMContentLoaded', () => {
        const floorButton = document.querySelector<HTMLButtonElement>("#floor")!
        floorButton.addEventListener("click", () => {
            calculatorDisplay.textContent = Math.floor(Number(calculatorDisplay.textContent)).toString()
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const randomButton = document.querySelector<HTMLButtonElement>("#random")!
        randomButton.addEventListener("click", () => {
            calculatorDisplay.textContent = String(Math.random())
        })
    })
    // Function End
    eraseButton.addEventListener("click", () => {
        calculatorDisplay.textContent = "";
        calculatorDomArray.pop();
        const tempSpan: HTMLSpanElement = document.createElement('span');
        tempSpan.classList.add('colored-text');
        
        for (let i: number = 0; i < calculatorDomArray.length; i++) {
            const currentElement = calculatorDomArray[i];
            if (currentElement instanceof HTMLElement) {
              tempSpan.append(currentElement.textContent ?? "");
              calculatorDisplay.append(tempSpan);
            }
          }

        characterCounter--;
        if (characterCounter < 0) {
            characterCounter = +tempcharacterCounter;
        }
    });
    eraseAll.addEventListener("click", () => {
        calculatorDisplay.textContent = ""
        calculatorDomArray = []
        characterCounter = 0
    })
    equalButton.addEventListener("click", () => {
        // all the calculator used function
        let openParenthesisSign: number = 0;
        let openParenthesisCounter: number = 0;
        let closedParenthesisCounter: number = 0;
        calculatorArray = calculatorDisplay.textContent!.split("")
        uniteCharacter()
        parseCalculatorArray()
        expfunction()
        squrerootfunction()
        logyxfunction()
        while(calculatorArray.includes("(") || calculatorArray.includes(")")) {
            solveMultiplicationAndDivisionInParenthesis()
            solveAdditionsAndSubtractionInParenthesis()
        
            // crash preventing
            if (calculatorArray.includes(NaN)) {
                errorhandler()
                break
            }
        
            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(") {
                    openParenthesisCounter++
                    openParenthesisSign = i
                }
                if (calculatorArray[i] === ")") {
                    closedParenthesisCounter++
                }
            }
            // count how many parentheses the user has inserted 
            if (openParenthesisCounter !== closedParenthesisCounter) {
                errorhandler()
                break
            }
            else if (openParenthesisCounter === closedParenthesisCounter && calculatorArray[openParenthesisSign + 1] === ")") {
                errorhandler()
                break
            }        
        }         
        while(calculatorArray.includes("*") || calculatorArray.includes("/") || calculatorArray.includes("+") || calculatorArray.includes("-")|| calculatorArray.includes("%") || calculatorArray.includes("^") || calculatorArray.some(x => x < 0) && calculatorArray.length !== 1) {
            solveMultiplicationAndDivision(calculatorArray)
            solveAdditionsAndSubtraction(calculatorArray)
            solvedmod()
            exponent()
        }
        appendResult()
        // calculator logic
        // function used to unite into number all the string 
        function uniteCharacter(): void {
            let counter = 0;
            while (calculatorArray[counter + 1] !== undefined) {
                try {
                    if (isNaN(parseFloat(calculatorArray[counter].toString())) && calculatorArray[counter] !== "-") {
                        counter++;
                    } else if (isNaN(parseFloat(calculatorArray[counter].toString())) === false || calculatorArray[counter] === "-") {
                        if (isNaN(parseFloat(calculatorArray[counter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                            let numberCounter = counter;
                            while (isNaN(parseFloat(calculatorArray[numberCounter + 1].toString())) === false || calculatorArray[counter + 1] === ".") {
                                calculatorArray[numberCounter] = `${calculatorArray[numberCounter]}${calculatorArray[numberCounter + 1]}`;
                                calculatorArray.splice(numberCounter + 1, 1);
                            }
                        } else {
                            counter++;
                        }
                    }
                } catch (e) {
                    counter--;
                    break;
                }
            }
            console.log(calculatorArray);
            calculatorArray[calculatorArray.length - 1] = (calculatorArray[calculatorArray.length - 1] as string).replaceAll('undefined', '');
        }        
        // function to parse all the string into number
        function parseCalculatorArray() {
            for (let i = 0; i < calculatorArray.length; i++) {
                if (isNaN(parseFloat(calculatorArray[i].toString())) === false) {
                    calculatorArray[i] = parseFloat(calculatorArray[i].toString())
                }
            }
        }
    })
    // function used to prevent the browser from crashing when the user insert something wrong 
    function errorhandler() {
        alert("You have insert something wrong, pls retry")
        alert("don't do something like 33(22+44)")          
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
            for (let i: number = <number>parenthesisCounter; i < finalParenthesis; i++) {
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
                for (let i = parenthesisCounter as number; i < finalParenthesis; i++) {
                    multiplyDivide(operatorChecker as number);
                }
            }
        }
        } while (toLoop === true && calculatorArray.includes("(") && calculatorArray.includes(")"));        
    }
    function multiplyDivide(operatorChecker: number): void {
        // check if the number is negative
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "*" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) * Number(calculatorArray[operatorChecker + 1]);
            calculatorArray.splice(operatorChecker, 2);
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "/" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) / Number(calculatorArray[operatorChecker + 1]);

            calculatorArray.splice(operatorChecker, 2);
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "*" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) * Number(calculatorArray[operatorChecker + 1]);
            calculatorArray.splice(operatorChecker, 2);
        }
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i - 1] === "(" && isNaN(parseFloat(String(calculatorArray[i]))) === false && calculatorArray[i + 1] === ")") {
                calculatorArray.splice(i - 1, 1);
                i--;
                calculatorArray.splice(i + 1, 1);
                i--;
            }
        }
    }    
    // function used to add and subtract in pharenthesis
    function solveAdditionsAndSubtractionInParenthesis() {
        do {
            for (let j = calculatorArray.length; j > 0; j--) {
                if (calculatorArray[j] === ")") {
                    finalParenthesis = j
                }
            }
            for (let i = 0; i < calculatorArray.length; i++) {
                if (calculatorArray[i] === "(" && i < finalParenthesis) {
                    parenthesisCounter = i
                    counter = parenthesisCounter as number + 1;
                }
            }
            for (let i = parenthesisCounter as number; i < finalParenthesis; i++) {              
                if (calculatorArray[i] === "+" || calculatorArray[i] === "-") {
                    toLoop = true
                    break
                }
                else {
                    toLoop = false
                }
            }
            if (typeof counter === "number") {
            while (counter < finalParenthesis) {
                counter++
                // iterate trought the pharenthesis
                for (let operatorChecker = parenthesisCounter as number + 1; operatorChecker < finalParenthesis; operatorChecker++) {
                    sumSubtract(operatorChecker)                
                }
            }
        }
        } while (toLoop === true && calculatorArray.includes("(") && calculatorArray.includes(")"))
    }
    function sumSubtract(operatorChecker: number) {
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] < 0 && calculatorArray[operatorChecker - 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) + Number(calculatorArray[operatorChecker + 1]);
            calculatorArray.splice(operatorChecker, 1)
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "+" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) + Number(calculatorArray[operatorChecker + 1]);
            calculatorArray.splice(operatorChecker, 2)
        }
        while (calculatorArray[operatorChecker - 1] !== ")" && calculatorArray[operatorChecker] === "-" && calculatorArray[operatorChecker + 1] !== "(" && calculatorArray.includes("(")) {
            calculatorArray[operatorChecker - 1] = Number(calculatorArray[operatorChecker - 1]) - Number(calculatorArray[operatorChecker + 1]);
            calculatorArray.splice(operatorChecker, 2)
        }
        // check if there is a negative number 
        
    
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i - 1] === "(" && isNaN(parseFloat(calculatorArray[i].toString())) === false && calculatorArray[i + 1] === ")") {
                calculatorArray.splice(i - 1, 1);
                i--;
                calculatorArray.splice(i + 1, 1);
                i--;
                if (typeof parenthesisCounter === 'number') {
                    finalParenthesis = parenthesisCounter;
                    toLoop = false;
                  } 
            }
        }                  
    } 
    // solve multiplication and division that are outside of the parenthesis
    function solveMultiplicationAndDivision(calculatorArray: Array<number | string>): void {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "*") {
                calculatorArray[i - 1] = (calculatorArray[i - 1] as number) * (calculatorArray[i + 1] as number);
                calculatorArray.splice(i, 2);
            }
            if (calculatorArray[i] === "/") {
                calculatorArray[i - 1] = (calculatorArray[i - 1] as number) / (calculatorArray[i + 1] as number);
                calculatorArray.splice(i, 2);
            }
            if (i === calculatorArray.length - 1 && calculatorArray.includes("*") || calculatorArray.includes("/")) {
                i = 0;
            }
        }
    }
    // solve addition and subtraction that are outside of the parenthesis
    function solveAdditionsAndSubtraction(calculatorArray: Array<number | string>): void {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "+") {
                calculatorArray[i - 1] = (calculatorArray[i - 1] as number) + (calculatorArray[i + 1] as number);
                calculatorArray.splice(i, 2);
            }
            if (calculatorArray[i - 1] !== undefined && typeof calculatorArray[i] === "number" && calculatorArray[i] < 0) {
                calculatorArray[i - 1] = (calculatorArray[i - 1] as number) + (calculatorArray[i] as number);
                calculatorArray.splice(i, 1);
            }
        }
    }
    function solvedmod() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "%") {
                calculatorArray[i - 1] = Number(calculatorArray[i - 1]) % Number(calculatorArray[i + 1]);
                calculatorArray.splice(i,2);
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
                calculatorArray[i - 1] = Number(calculatorArray[0]) * Math.pow(10, calculatorArray[calculatorArray.length-1] as number); 
            }
        }
    }        
    function squrerootfunction() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "√") {
                calculatorArray[i - 1] =  Math.pow(Number(calculatorArray[calculatorArray.length - 1]), 1 / Number(calculatorArray[0]))
            }
        }
    }           
    function logyxfunction() {
        for (let i = 0; i < calculatorArray.length; i++) {
            if (calculatorArray[i] === "y" && calculatorArray[i+1] === "l" && calculatorArray[i+2] === "o" && calculatorArray[i+3] === "g") {
                calculatorArray[i - 1] = Math.log(Number(calculatorArray[calculatorArray.length - 1])) / Math.log(Number(calculatorArray[0]));
            }
        }
    }   
    // For Memory functions
    document.addEventListener('DOMContentLoaded', () => {
        const memorysaveButton = document.querySelector<HTMLButtonElement>('#memorysave')!
        memorysaveButton.addEventListener("click", () => {
            memorysave()
        })
    })      
    document.addEventListener('DOMContentLoaded', () => {
        const memoryclearButton = document.querySelector<HTMLButtonElement>('#memoryclear')! 
        memoryclearButton.addEventListener("click", () => {
            memoryclear()
        })
    })   
    document.addEventListener('DOMContentLoaded', () => {
        const memoryrecallButton = document.querySelector<HTMLButtonElement>('#memoryrecall')! 
        memoryrecallButton.addEventListener("click", () => {
            memoryrecall()
        })
    })
    document.addEventListener('DOMContentLoaded', () => {
        const memoryplusButton = document.querySelector<HTMLButtonElement>('#memoryplus')!
        memoryplusButton.addEventListener("click", () => {
            memoryplus()                
        })
    })
    document.addEventListener("DOMContentLoaded", () => {
        const memoryminusButton = document.querySelector<HTMLButtonElement>('#memoryminus')! 
        memoryminusButton.addEventListener("click", () => {
            memoryminus()
        })
    })
    function enablemcmr() {
        (<HTMLButtonElement>document.getElementById('memoryclear')).disabled = false;
        (<HTMLButtonElement>document.getElementById('memoryrecall')).disabled = false;
    }
    function memoryminus() {
    enablemcmr();
        if (memory.length == 0) {
            memory.push(parseFloat(calculatorDisplay.textContent as string));
        } else {
            memory[memory.length - 1] = Number(memory[memory.length - 1]) - parseFloat(calculatorDisplay.textContent as string);
        }
    }
    function memoryplus() {
    enablemcmr();
        if (memory.length == 0) {
            memory.push(parseFloat(calculatorDisplay.textContent as string));
        } else {
            memory[memory.length - 1] = Number(memory[memory.length - 1]) + parseFloat(calculatorDisplay.textContent as string);
        }
    }  
    function memorysave(): void {
        console.log("memory before:", memory);
        enablemcmr();
        const input = calculatorDisplay.textContent!.trim();
        if (!/^\d+(\.\d+)?$/.test(input)) {
            alert("Enter a number");
        } else {
            if (!memory) {
                console.log("memory was undefined, initializing...");
                memory = [];
            }
            memory.push(Number(input));
        }
    }    
    function memoryclear() {
        memory = [];
        (<HTMLButtonElement>document.getElementById('memoryclear')).disabled = true;
        (<HTMLButtonElement>document.getElementById('memoryrecall')).disabled = true;
    }
    function memoryrecall() {
        calculatorDisplay.textContent = memory[memory.length - 1].toString();
    }
    //Memory functions End 
    function appendResult(): void {
        calculatorDisplay.textContent = "";
        calculatorDomArray = [];
        const tempSpan: HTMLSpanElement = document.createElement("span");
        tempSpan.append(calculatorArray[0].toString());
        tempSpan.classList.add('colored-text');
        calculatorDisplay.append(tempSpan);
      }      
    // end of the function
}   