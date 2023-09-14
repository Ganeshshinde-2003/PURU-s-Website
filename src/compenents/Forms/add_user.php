<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Database connection details
    $host = 'localhost';
    $username = 'u256502557_purus';
    $password = 'kiK0beRFp1=F';
    $database = 'u256502557_purusent';

    // Create a database connection
    $conn = mysqli_connect($host, $username, $password, $database);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve data from the form
    $FirstName = $_POST['FirstName'];
    $LastName = $_POST['LastName'];
    $EmailAddress = $_POST['EmailAddress'];
    $PhoneNumber = $_POST['PhoneNumber'];
    $CompanyName = $_POST['CompanyName'];

    // Prepare and execute the SQL query to insert the data
    $sql = "INSERT INTO User (FirstName, LastName, EmailAddress, PhoneNumber, CompanyName) 
            VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $FirstName, $LastName, $EmailAddress, $PhoneNumber, $CompanyName);

    if ($stmt->execute()) {
        echo "User added successfully.";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    // Close the database connection
    $conn->close();
}
?>
