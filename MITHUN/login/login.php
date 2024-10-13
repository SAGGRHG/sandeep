<?php
// login.php

// Include the database connection
include('db.php');
session_start();

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Check if the fields are empty
    if (empty($email) || empty($password)) {
        echo "All fields are required!";
    } else {
        // Query to find the user in the database
        $sql = "SELECT * FROM customer WHERE email = '$email' LIMIT 1";
        $result = $conn->query($sql);

        // If the email is found
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();

            // Verify the password
            if (password_verify($password, $user['password'])) {
                // Password is correct, login successful
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
                $_SESSION['user_email'] = $user['email'];
                echo "Login successful! Welcome, " . $user['name'] . " <a href='index.php'>Go to homepage</a>";
            } else {
                // Incorrect password
                echo "Incorrect password!";
            }
        } else {
            // Email not found
            echo "No user found with that email!";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
</head>
<body>

    <h2>Login Form</h2>

    <form action="login.php" method="POST">
        <input type="email" name="email" placeholder="Enter your email" required><br><br>
        <input type="password" name="password" placeholder="Enter your password" required><br><br>
        <button type="submit">Login</button>
    </form>

    <p>Don't have an account? <a href="signup.php">Signup here</a></p>

</body>
</html>
