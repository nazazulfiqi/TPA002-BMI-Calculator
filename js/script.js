let button = document.getElementById("btn");

button.addEventListener("click", () => {
  const result = document.getElementById("output");
  const badan = document.getElementById("badan");

  const weight = parseInt(document.getElementById("weight").value);
  const height = parseInt(document.getElementById("height").value);
  let weight_status = false,
    height_status = false;
  if (weight === "" || isNaN(weight) || weight <= 0) {
    document.getElementById("weight-error").innerHTML =
      "Masukkan Berat Badan yang Benar!";
  } else {
    document.getElementById("weight-error").innerHTML = "";
    weight_status = true;
  }

  if (height === "" || isNaN(height) || height <= 0) {
    document.getElementById("height-error").innerHTML =
      "Masukkan Tinggi Badan yang Benar!";
  } else {
    document.getElementById("height-error").innerHTML = "";
    height_status = true;
  }

  if (height_status && weight_status) {
    const bmi = weight / (height / 100) ** 2;

    if (bmi < 18.5) {
      result.innerHTML = bmi.toFixed(2);
      badan.innerHTML = "Under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      result.innerHTML = bmi.toFixed(2);
      badan.innerHTML = "Normal";
    } else if (bmi >= 25 && bmi <= 29.9) {
      result.innerHTML = bmi.toFixed(2);
      badan.innerHTML = "Overweight";
    } else {
      result.innerHTML = bmi.toFixed(2);
      badan.innerHTML = "Obesity";
    }
  }
});

function hanyaAngka(event) {
  var angka = event.which ? event.which : event.keyCode;
  if (angka != 46 && angka > 31 && (angka < 48 || angka > 57)) return false;
  return true;
}
