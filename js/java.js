function generateCaptcha() {  
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';  
    let captcha = '';  
    for (let i = 0; i < 12; i++) {  
        captcha += characters.charAt(Math.floor(Math.random() * characters.length));  
    }  
    document.getElementById('captcha').innerText = captcha;  
}  
document.getElementById('refresh').addEventListener('click', generateCaptcha);  
// Generate CAPTCHA  
generateCaptcha();  