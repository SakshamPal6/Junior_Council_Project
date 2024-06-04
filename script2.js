document.getElementById('bookButton2').addEventListener('click', function() {
    const name2 = document.getElementById('name2').value;
    const phone2 = document.getElementById('phone2').value;
    const message2 = document.getElementById('message2').value;

    if (name2 && phone2 &&message2) {
        alert('Your feedback has been recorded');
    } 
    else {
        alert('Please fill out all required fields.');
    }
});