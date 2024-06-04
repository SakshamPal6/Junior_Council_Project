document.getElementById('bookButton3').addEventListener('click', function() {
    const email3 = document.getElementById('email3').value;

    if (email3) {
        alert('YaY! you have successfully subscribed');
    } 
    else {
        alert('Please fill out all required fields.');
    }
});

