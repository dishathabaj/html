<?php
// Database connection parameters
$host = 'localhost';          // Host name (usually localhost)
$dbname = 'test_db';          // Your database name
$username = 'root';           // Database username (default in XAMPP is 'root')
$password = '';               // Database password (default in XAMPP is empty)

// Create a connection using PDO (PHP Data Objects)
try {
    // Create a PDO instance (MySQL)
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    // Set the PDO error mode to exception
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    echo "Connected to the database successfully!";
} catch (PDOException $e) {
    // If the connection fails, it will show the error message
    echo "Connection failed: " . $e->getMessage();
}
?>
