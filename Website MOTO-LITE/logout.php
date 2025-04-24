<?php
session_start();  // Start the session to destroy it
session_destroy(); // Destroy the session
header("Location: Moto-Lite_Home_page.php"); // Redirect to home page after logout
exit();
?>
