function validatePage(){
    let isValid = true;


    const name = document.getElementById("fullName").value.trim();
if(name == "" || !/^[A-Za-z\s]+$/.test(name)) {
    document.getElementById('nameError').textContent = "Name is required and must contain only letters and space."
    isValid = false
}

    const dob = document.getElementById("dob").value.trim();
    if(dob == "" || /^\d{4}-\d{2}-\d{2}/.test(dob)) {
        document.getElementById('dobError').textContent = "DOB cannot be blank or must be yyyy-dd-mm format."
        isValid = false
    }
    const partNumber = document.getElementById("partNumber").value;
    if(partNumber == 0) {
        document.getElementById('partError').textContent = "Please select valid part"
        isValid = false
    }
    const warantSelected = document.querySelector('input[name="warranty"]:checked');
    if (!warantSelected) {
        document.getElementById('warrantyError').textContent = "Please select warranty."
        isValid = false
    }

    //console.log(`The name is ${name} and the dob is ${dob} and partHNumber is  ${partNumber} and waranty is ${warantSelected}`)
    if(isValid) {
        //building display string
        const summaryHTML = `
        <p><strong>Name:</strong>${name}</p>
         <p><strong>DOB:</strong>${dob}</p>
          <p><strong>Part No:</strong>${partNumber}</p>
          <p><strong>Warranty:</strong>${warantSelected.value}</p>
          `
        //set the inner HTML
          document.getElementById('orderDetails').innerHTML = summaryHTML
        //show the message
          document.getElementById("formContainer").style.display = "none";
          document.getElementById("confirmation").innerHTML = "block";
    }


    return isValid;
}