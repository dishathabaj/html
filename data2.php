<?php
$host = 'localhost';
$dbname = 'test_db';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // SQL query to insert data into the "users" table
    $sql = "INSERT INTO users (name, email) VALUES (:name, :email)";

    // Prepare the query
    $stmt = $pdo->prepare($sql);

    // Bind parameters
    $stmt->bindParam(':name', $name);
    $stmt->bindParam(':email', $email);

    // Insert data
    $name = 'John Doe';
    $email = 'john@example.com';
    $stmt->execute();

    echo "Data inserted successfully!";
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
