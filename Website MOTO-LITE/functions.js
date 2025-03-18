function togglePassword() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'path/to/your/eye-off-icon.png'; // Replace with your "eye-off" icon
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'path/to/your/eye-icon.png';
    }
}
