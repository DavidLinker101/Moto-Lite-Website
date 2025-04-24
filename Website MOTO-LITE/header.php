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
        <?php if (isset($_SESSION['user_logged_in']) && $_SESSION['user_logged_in'] === true): ?>
            <a href="logout.php"><i class="fas fa-sign-out-alt"></i> Logout (<?php echo htmlspecialchars($_SESSION['username']); ?>)</a>
        <?php else: ?>
            <a href="login.php"><i class="fas fa-user"></i> Log in</a>
            <a href="register.php"><i class="fas fa-user-plus"></i> Sign up</a>
        <?php endif; ?>
    </div>
</div>

<!-- Navigation Bar -->
<nav>
    <ul>
        <li><a href="Moto-Lite_Home_page.html">Home</a></li>
        <li><a href="Moto-Lite_Blog_page.html">Blog</a></li>
        <li><a href="Moto-Lite_Service_page.html">Service</a></li>
        <li><a href="Moto-Lite_Contact_page.html">Contacts</a></li>
        <li><a href="Moto-Lite_About_page.html">About us</a></li>
    </ul>
</nav>
