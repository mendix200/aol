// Buy Now Payment
function buyNow(productName, productPrice) {
    document.getElementById("product-name").textContent = productName;
    document.getElementById("product-price").textContent = productPrice;
    document.getElementById("payment-form").style.display = "block";
    document.getElementById("installment-form").style.display = "none";
}

// Installment Payment
function showInstallmentForm(productName, productPrice) {
    document.getElementById("installment-product-name").textContent = productName;
    document.getElementById("installment-price").textContent = (productPrice / 12).toFixed(2);
    document.getElementById("installment-form").style.display = "block";
    document.getElementById("payment-form").style.display = "none";
}

// Calculate Monthly Installment
function calculateInstallment() {
    const productPrice = document.getElementById("installment-product-name").textContent === "iPhone 14 Pro" ? 999 : 699;
    const months = parseInt(document.getElementById("installmentMonths").value);
    const installmentPrice = (productPrice / months).toFixed(2);
    document.getElementById("installment-price").textContent = installmentPrice;
}

// Form Submission for Buy Now
document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Payment Successful! Thank you for your purchase.");
    document.getElementById("paymentForm").reset();
    document.getElementById("payment-form").style.display = "none";
});

// Form Submission for Installments
document.getElementById("installmentPaymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Installment application submitted! Our team will contact you soon.");
    document.getElementById("installmentPaymentForm").reset();
    document.getElementById("installment-form").style.display = "none";
});
