<?php
session_start();
$conn = new mysqli("localhost", "root", "", "moto_lite");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ? AND password = ?");

if (!$stmt) {
    die("Prepare failed: " . $conn->error);
}

$stmt->bind_param("ss", $email, $password);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $_SESSION['logged_in'] = true;
    $_SESSION['email'] = $email;
    header("Location: Moto-Lite_Home_page.php");
    exit();
} else {
    echo "Invalid login!";
}
?>
