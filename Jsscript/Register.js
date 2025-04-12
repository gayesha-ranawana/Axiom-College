document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("axiomCreativeRegisterForm");
    const captchaField = document.getElementById("axiomCaptcha");
    const captchaLabel = document.querySelector('label[for="axiomCaptcha"]');
    const fileInput = document.getElementById("axiomQualificationFile");
    const successMessage = document.getElementById("axiomFormSuccess");
  
    // Generate random CAPTCHA
    const num1 = Math.floor(Math.random() * 10) + 5;
    const num2 = Math.floor(Math.random() * 10) + 5;
    const correctAnswer = num1 + num2;
  
    // Show CAPTCHA question
    captchaLabel.textContent = `What is ${num1} + ${num2}? *`;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const answer = captchaField.value.trim();
  
      // Validate CAPTCHA
      if (parseInt(answer) !== correctAnswer) {
        alert("❌ Incorrect CAPTCHA answer. Please try again.");
        captchaField.focus();
        return;
      }
  
      // Validate file upload
      if (fileInput.files.length === 0) {
        alert("❌ Please upload your qualification certificate.");
        fileInput.focus();
        return;
      }
  
      // Validate file type
      const allowedTypes = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
      const fileType = fileInput.files[0].type;
      if (!allowedTypes.includes(fileType)) {
        alert("❌ Invalid file type. Please upload a PDF or image file.");
        return;
      }
  
      // All validations passed
      successMessage.style.display = "block";
      form.reset();
  
      console.log("✅ Form submitted successfully!");
    });
  });
  