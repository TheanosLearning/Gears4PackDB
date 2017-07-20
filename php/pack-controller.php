<?php

$servername = "localhost";
$username = "c9_user";// echo $C9_USER
$password = "";
$dbname = "c9";

// create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// check connection
if ($conn -> connect_error) {
    die("Connection failed: " . $conn -> connect_error);
} 

// get post request
$post_json = file_get_contents("php://input");
$packData = json_decode($post_json, true);

// build columns and values
$keys = array();
$values = array();
foreach($packData as $key => $value) {
    array_push($keys, $key);
    array_push($values, $value);
}

// build insert statement
$sql = 'INSERT INTO packs (' . implode(', ', $keys) . ') VALUES ("' . implode('", "', $values) . '")';

// run sql
if ($conn -> query($sql) === TRUE) {
	echo $sql . ' -> Success' ;
} else {
	echo 'Error: ' . $sql . ' -> ' . $conn -> error;
}

// close connection
$conn -> close();

?>
