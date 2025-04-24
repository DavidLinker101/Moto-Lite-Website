<?php
session_start();  // Start the session

// Check if the user is logged in
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    // If the user is not logged in, redirect to the login page
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MOTO-LITE - Home</title>
    <link rel="stylesheet" href="Home_page_Design.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<!-- If the user is logged in, show their username and "Log Out" option -->
<?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] === true): ?>
    <div>Welcome, <?php echo $_SESSION['username']; ?>!</div>
    <a href="logout.php">Log Out</a>
<?php else: ?>
    <div><a href="login.php">Log In</a></div>
<?php endif; ?>
<!-- Header with Logo -->
<img src="images/Motolite_Logo.png" alt="Moto-Lite Logo" class="logo-large">

<!-- Cart and Login/Signup Box -->
<div class="auth-cart-container">
    <!-- Cart Box -->
    <div class="cart-box">
        <a href="Cart_menu_page.html"><i class="fas fa-shopping-cart"></i> Cart</a>
    </div>
    <!-- Login/Signup Box -->
    <div class="auth-box">
        <?php if (isset($_SESSION['logged_in']) && $_SESSION['logged_in'] == true): ?>
            <!-- If logged in, show logout -->
            <a href="logout.php"><i class="fas fa-sign-out-alt"></i> Log out</a>
        <?php else: ?>
            <!-- If not logged in, show login -->
            <a href="login.php"><i class="fas fa-user"></i> Log in/Sign up</a>
        <?php endif; ?>
    </div>
</div>

<!-- Navigation Bar -->
<nav>
    <ul>
        <li><a href="Moto-Lite_Home_page.php">Home</a></li>
        <li><a href="Moto-Lite_Blog_page.html">Blog</a></li>
        <li><a href="Moto-Lite_Service_page.html">Service</a></li>
        <li><a href="Moto-Lite_Contact_page.html">Contacts</a></li>
        <li><a href="Moto-Lite_About_page.html">About us</a></li>
    </ul>
</nav>

<!-- Main Content -->
<main class="main-container">
    <section class="categories">
        <div class="category-label-box">
            <h2>Category</h2>
            <div class="horizontal-line"></div>
        </div>
        <div class="category-box">
            <ul class="clickable-list">
                <!-- Categories Here -->
            </ul>
        </div>
    </section>

    <div class="product-section">
        <h1 class="section-title">Products</h1>
        <div class="product-list" id="product-list"></div>
    </div>
</main>

<script>
    document.addEventListener("DOMContentLoaded", function () {
        window.categoryLinks = document.querySelectorAll("[data-category]");
    });
</script>
<script src="Home_page_Script.js"></script>
</body>
</html>
