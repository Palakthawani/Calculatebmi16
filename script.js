function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.textContent = "Please enter valid weight and height.";
        result.style.color = "red";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else if(bmi >30 && bmi< 34.9){
        category = "Class 1 Obesity";
    }else if(bmi >=35 && bmi <39.9){
        category = "Class 2 Obesity";
    }else if(bmi >=40 && bmi <49.9){
        category = "Class 3 Obesity"
    }
    else {
     category= Marbid;
    }

    result.style.color = "#333";
    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
}