# ![icons8-calculator-28](https://user-images.githubusercontent.com/122254160/227201241-3d713958-ce79-4345-8b8e-f732eb9ed720.png)  Scientific Calculator Using TypeScript ![typescript-22](https://user-images.githubusercontent.com/122254160/225262064-ef7a65d1-1b86-40b9-bd93-ace56cb0025f.png)
## ![icons8-programming-flag-28](https://user-images.githubusercontent.com/122254160/227199765-15b1bd41-2e39-4103-a65c-f6f9e16bcf47.png) **Languages has been used for the project**
![My Skills](https://skillicons.dev/icons?i=html,css,bootstrap,js,typescript)

## :rocket: Live Demonstraion
- [ Click Here to Preview The Calculator](https://subtle-lollipop-1c4694.netlify.app/)
## ![icons8-about-28](https://user-images.githubusercontent.com/122254160/227203854-e55cdbbb-e495-4082-8c62-88f479c45330.png) **What is typescript**
- **💻 TypeScript is a programming language developed by Microsoft 🚀 that is a typed superset of JavaScript 🌐. It offers features such as static typing 🙅‍♂️, interfaces 🤝, classes 🏫, modules 📦, and decorators 🎀, making it easier to write and maintain large-scale applications. TypeScript code is transpiled to JavaScript code 🔄 and can run in any JavaScript environment 🌍, including web browsers 🌐 and Node.js 🚀. It has excellent tooling support 🛠️ and is a popular choice for building complex applications 🏗️.**
## ![icons8-installing-updates-22](https://user-images.githubusercontent.com/122254160/225263873-cf5e8900-8799-415d-b235-5c07c416f58f.png) **Complete Inilizatoin Of TypeScript** 
#### Step 1 : install Ts in your IDE
```
npm install -g typescript
```
> Write this command in yout IDE's Terminal
#### Step 2 : Create src and build folder for your project
![Screenshot from 2023-03-15 14-57-16](https://user-images.githubusercontent.com/122254160/225266911-d3885509-9ed2-411f-a485-4e414ea972cf.png)
#### Step 3 :  Put all the html and js file inside the build folder & all the typescript file will be at the src folder
![Screenshot from 2023-03-15 15-02-17](https://user-images.githubusercontent.com/122254160/225267732-172a9f90-e71a-40cc-8c60-cd139e29de5e.png)
#### Step 4 :  Create a config file Using this command 
``` 
tsc --init
```
> it will create **tsconfig.json** file

#### Step 5 :  Modify mantioned code in ```tsconfig.json``` 
```
"rootDir": "./initializeTS/src", // here you give your src folder path
"outDir": "./initializeTS/build/js", // Here you give your jsvascript file path and 'build/js' will create js folder inside the build folder

// Add this line of code at the end of the tsconfig.json file
,
  "include": [
    "initializeTS/src"
  ]
```
#### Step 5 :  run this command after make changes in json file it will update all the changes of that are maked in json file.
```
tsc -w 
```

## ![icons8-source-code-28](https://user-images.githubusercontent.com/122254160/227211977-c2262cad-e1be-44b7-901b-b3983010440a.png) **Some Use-cases Of Typescript In This Project**
- **The TypeScript approach used in this code is to add `optional type annotations` to variables, parameters, and return types. This allows the compiler to catch type-related errors at compile time instead of runtime, which can help prevent bugs and improve the reliability of the code.**

![Screenshot from 2023-03-23 18-31-14](https://user-images.githubusercontent.com/122254160/227212237-91394c24-bf63-4f33-9f3a-24a4b3b2b893.png)

- **In this code, the TypeScript approach used is to add type annotations to the variable i and to use the for loop to iterate through a section of an array based on the values of two variables, parenthesisCounter and finalParenthesis. The if statement inside the loop checks if the current element in the array is either a multiplication or division operator, and sets the toLoop variable to true if it is. If the element is not a multiplication or division operator, the toLoop variable is set to false. The toLoop variable is used later in the code to determine whether to continue looping or not.**

![Screenshot from 2023-03-23 18-39-12](https://user-images.githubusercontent.com/122254160/227214087-fa42e8d5-5f8e-4126-86bc-1751c5e9deec.png)

## ![icons8-about-28](https://user-images.githubusercontent.com/122254160/227203854-e55cdbbb-e495-4082-8c62-88f479c45330.png) **About Project**
- 🔢 **A TypeScript scientific calculator is a program written in TypeScript language that allows users to perform mathematical operations.**

- ➕ ➖ ✖️ ➗ **It provides functions for basic arithmetic operations such as addition, subtraction, multiplication, and division.**

- 🧮 **It also includes more advanced operations like exponentiation, trigonometric functions, and logarithmic functions.**

- 🖥️ **The calculator has a user-friendly and intuitive interface with buttons for all the common mathematical operations.**

- ⏬⏫ **It features bracket operations, allowing users to group calculations and prioritize their execution order.**

- 💾 **The calculator includes a memory function that allows users to store values for later use in calculations.**

- 💻 **The input and output are displayed clearly on the screen for easy readability.**

- 🔬 **The TypeScript scientific calculator is a powerful tool for students, researchers, and professionals in various fields to perform a wide range of mathematical calculations.**
