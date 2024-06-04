let currentIndex = 0;
function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slider-container').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

//date
document.getElementById("date").defaultValue = "2024-06-01";

//online reservation
document.getElementById('bookButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const persons = document.getElementById('persons').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const message = document.getElementById('message').value;

    if (name && phone && persons && date && time) {
        const tokenNumber = Math.floor(Math.random() * 10000);
        document.getElementById('tokenNumber').innerText = tokenNumber;

        const modal = document.getElementById('confirmationModal');
        modal.style.display = 'flex';

        document.querySelector('.close-button').addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        };
    } else {
        alert('Please fill out all required fields.');
    }
});

function printToken() {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const persons = document.getElementById('persons').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const tokenNumber = document.getElementById('tokenNumber').innerText;

    const printContent = `
    <div font-family: Poppins, sans-serif;">
        <center><h2 style="font-family: Forum, sans-serif; font-size: 3rem;">Urban Restaurant</h2></center>
        <br><br><br><br>
        <p style="font-size: 1.5rem;">Customer Name: ${name}</p>
        <br>
        <p style="font-size: 1.5rem;">Phone Number: ${phone}</p>
        <br>
        <p style="font-size: 1.5rem;">Number of Seats Booked: ${persons}</p>
        <br>
        <p style="font-size: 1.5rem;">Date: ${date}</p>
        <br>
        <p style="font-size: 1.5rem;">Time: ${time}</p>
        <br><br><br>
        <center><div id="qrcode"></div></center>
        <br><br>
        <center><p style="font-size: 3rem;">Token Number: ${tokenNumber}</p></center>
    </div>
    <footer style="position: fixed; bottom: 20px; left: 0; right: 0; text-align: center; font-size: 1.2rem;">Close this window and again click the print button if QR is not generated</footer>
`;

    const printWindow = window.open('', '', 'width=400,height=600');
    printWindow.document.write('<html><head><title>Print Token</title></head><body>');
    printWindow.document.write(printContent);
    printWindow.document.write('</body></html>');

    const qrCodeElement = printWindow.document.getElementById('qrcode');
    const qr = qrcode(0, 'L');
    qr.addData(tokenNumber);
    qr.make();
    qr.createImgTag(4, 0);
    qrCodeElement.innerHTML = qr.createImgTag();

    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
    printWindow.close();
}


//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 20 ||
document.documentElement.scrollTop > 20
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

