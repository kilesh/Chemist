<?php
$servername = "localhost";
$username = "root";
$password = "Him1942505";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
//    die("Connection failed: " . $conn->connect_error);
    echo "Connected unsuccessfully";
}else{
    
    echo "Connected successfully";
}


?>