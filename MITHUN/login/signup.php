<?php
// signup.php

// Include the database connection
include('db.php');

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Validate email and password
    if (empty($name) || empty($email) || empty($password)) {
        echo "All fields are required!";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);

        // Insert user data into the database
        $sql = "INSERT INTO customer (name, email, password) VALUES ('$name', '$email', '$hashed_password')";

        if ($conn->query($sql) === TRUE) {
            echo "Registration successful! You can now <a href='index.php'>login</a>";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Signup</title>
</head>
<body>

    <h2>Signup Form</h2>

    <form action="signup.php" method="POST">
        <input type="text" name="name" placeholder="Enter your full name" required><br><br>
        <input type="email" name="email" placeholder="Enter your email" required><br><br>
        <input type="password" name="password" placeholder="Create a password" required><br><br>
        <button type="submit">Signup</button>
    </form>

    <p>Already have an account? <a href="index.php">Login here</a></p>

</body>
</html>
