const heightInput = document.getElementById('height_input');
const weightInput = document.getElementById('weight_input');
const buttonBMI = document.getElementById('button_BMI');
const resultBMI = document.getElementById('result_BMI');

function calculateBMI(){
    const height = heightInput.value / 100;
    const heightSqr = Math.pow(height, 2);
    const weight = weightInput.value;
    const BMI = weight / heightSqr;
    const BMIround = BMI.toFixed(2)
    resultBMI.textContent = "Ваш ИМТ равен " + BMIround;
    
}
buttonBMI.addEventListener('click', calculateBMI);
// console.log(calculateBMI())