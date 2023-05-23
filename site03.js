function convertIt() {
  //get the user entered value
  let kmValue = parseFloat(document.getElementById("InputValue").value);

  if (isNaN(kmValue)) {
    alert("Please enter a number");
  } else {
    let milesValue = convertToKm(kmValue);

    //display conversion result
    document.getElementById(
      "results"
    ).innerHTML = `${kmValue} km = ${milesValue.toFixed(2)} miles`;
  }
}

//takes a number to convert km to miles
function convertToKm(kmValue) {
  let miles = 0;
  miles = kmValue * 0.6214;

  return miles;
}
