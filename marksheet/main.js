// Get user input
var rollNumber = Number(prompt("Enter Roll No:"));
var studentName = String(prompt("Enter Student Name:"));
var level = String(prompt("Enter Class:"));
var computer = Number(prompt("Enter Computer marks:"));
var maths = Number(prompt("Enter Maths marks:"));
var physics = Number(prompt("Enter Physics marks:"));
var chemistry = Number(prompt("Enter Chemistry marks:"));
var english = Number(prompt("Enter English marks:"));
var urdu = Number(prompt("Enter Urdu marks:"));
var islamiat = Number(prompt("Enter Islamiat marks:"));
// Calculate result
var totalMarks = 700;
var result = maths + physics + chemistry + computer + english + urdu + islamiat;
var percentage = Math.round((result * 100) / totalMarks); // Round percentage to 0 decimal places
var grade;
var lowMarks = [maths , physics , chemistry , computer , english , urdu , islamiat].some(mark => mark < 50);
if(lowMarks){grade = "Fail" + "\n" + "  (Needs improvement. It appears that you struggled with the material this term. Take this as an opportunity to identify areas where you need additional support and work on developing a more effective study strategy. Seek assistance from teachers and use available resources to help you succeed in the future.)";
}
else if (percentage >= 80) {
    grade = "A+" + "\n" + "  (Excellent work! Your dedication and hard work are evident in your outstanding performance. Keep up the great effort and continue to strive for excellence.)";
} else if (percentage >= 70) {
    grade = "A" + "\n" + "  (Good job! You've demonstrated a strong understanding of the material. With a bit more focus and effort, you have the potential to reach even higher levels of achievement.)";
} else if (percentage >= 60) {
    grade = "B" + "\n" + "  (Fair performance. You've shown a basic understanding of the subject, but there's room for improvement. Consider dedicating more time to study and seek help if needed to enhance your grasp of the material.)";
} else if (percentage >= 50) {
    grade = "C" + "\n" + "  (Fair performance. You've shown a basic understanding of the subject, but there's room for improvement. Consider dedicating more time to study and seek help if needed to enhance your grasp of the material.)";
} 

else {
    grade = "Fail" + "\n" + "  (Needs improvement. It appears that you struggled with the material this term. Take this as an opportunity to identify areas where you need additional support and work on developing a more effective study strategy. Seek assistance from teachers and use available resources to help you succeed in the future.)";
}


// Display results on the webpage
var resultHTML = `.
    <p><span class="bold">Roll No:</span> ${rollNumber}</p>
    <p><span class="bold">Student Name:</span> ${studentName}</p>
    <p><span class="bold">Class:</span> ${level}</p>
    <table class="result-table">
        <thead>
            <tr>
                <th class="bold">Subjects</th>
                <th class="bold">Total Marks</th>
                <th class="bold">Marks Obtained</th>
            </tr>
        </thead>
        <tbody>
            <tr class="${computer <= 49 ? 'low-marks' : ''}">
                <td>Computer</td>
                <td>100</td>
                <td>${computer}</td>
            </tr>
            <tr class="${maths <= 49 ? 'low-marks' : ''}">
                <td>Maths</td>
                <td>100</td>
                <td>${maths}</td>
            </tr>
            <tr class="${physics <= 49 ? 'low-marks' : ''}">
                <td>Physics</td>
                <td>100</td>
                <td>${physics}</td>
            </tr>
            <tr class="${chemistry <= 49 ? 'low-marks' : ''}">
                <td>Chemistry</td>
                <td>100</td>
                <td>${chemistry}</td>
            </tr>
            <tr class="${english <= 49 ? 'low-marks' : ''}">
                <td>English</td>
                <td>100</td>
                <td>${english}</td>
            </tr>
            <tr class="${urdu <= 49 ? 'low-marks' : ''}">
                <td>Urdu</td>
                <td>100</td>
                <td>${urdu}</td>
            </tr>
            <tr class="${islamiat <= 49 ? 'low-marks' : ''}">
                <td>Islamiat</td>
                <td>100</td>
                <td>${islamiat}</td>
            </tr>
        </tbody>
    </table>
    <p><span class="bold">Total Marks:</span> 700</p>
    <p><span class="bold">Total Obtained Marks:</span> ${result}</p>
    <p><span class="bold">Percentage:</span> ${percentage}%</p>
    <p><span class="bold">Grade:</span> ${grade}</p>
`;

document.getElementById('result').innerHTML = resultHTML;
