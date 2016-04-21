<?php

$hostname="localhost";
$username="kyleslabo";
$password="DV89Q~P@3&[X";
$dbname="kyleslabo";
$usertable="test";
$yourfield = "name";
$yourfield2 = "score";

 $db = mysql_connect("$hostname","$username","$password");
 if (!$db) {
 die("Database connection failed miserably: " . mysql_error());
 }

 mysql_select_db($dbname);


?>
