
document.addEventListener('DOMContentLoaded', function() {
    const payBtn = document.getElementById('payBtn');
    const messageDiv = document.getElementById('message');
    
    payBtn.addEventListener('click', function() {
        messageDiv.textContent = 'Processing payment...';
        payBtn.disabled = true;
        
        new Promise((resolve) => {
            setTimeout(() => resolve(), 2000);
        }).then(() => {
            messageDiv.textContent = 'Payment Successful!';
        });
    });
});