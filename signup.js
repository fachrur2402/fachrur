// Fungsi untuk memvalidasi form login
function validateForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "" || password === "") {
        alert("Semua kolom harus diisi.");
        return false;  // Menghentikan pengiriman form
    }

    // Validasi username dan password (misalnya "admin" untuk username dan "password123" untuk password)
    if (username !== "admin" || password !== "password123") {
        alert("Username atau password salah.");
        return false;  // Menghentikan pengiriman form
    }

    // Jika berhasil, bisa diarahkan ke halaman utama atau dashboard
    alert("Login berhasil!");
    window.location.href = "index.html";  // Redirect ke halaman beranda
    return false;  // Menghentikan pengiriman form
}

// Fungsi untuk memvalidasi form pendaftaran
function validateRegisterForm() {
    const newUsername = document.getElementById('newUsername').value;
    const email = document.getElementById('email').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (newUsername === "" || email === "" || newPassword === "" || confirmPassword === "") {
        alert("Semua kolom harus diisi.");
        return false;  // Menghentikan pengiriman form
    }

    if (newPassword !== confirmPassword) {
        alert("Password dan konfirmasi password tidak cocok.");
        return false;  // Menghentikan pengiriman form
    }

    // Jika berhasil, dapat memberikan alert sukses dan mengarahkan ke halaman login
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";  // Redirect ke halaman login
    return false;  // Menghentikan pengiriman form
}
