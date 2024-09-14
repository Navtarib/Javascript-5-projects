var age = Number(prompt("Enter age"))
if(age <= 12){alert("you are classified as a Child")

}
else if(age >= 13 && age <= 19){alert("you are classified as a Teenager")}
else if(age >= 20 && age <= 64){alert("you are classified as an Adult")}
else if(age >= 65 && age <= 150){alert("you are classified as a Senior")}
 else{
    alert("Please enter a valid age between 0 and 150.");
}

