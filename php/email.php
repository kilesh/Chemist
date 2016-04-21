<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
 
$EmailTo = "kyles11@kyleslabo.com";
$Subject = "New Message from urweb";
 
// prepare email body text
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n\n\n";
 
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n\n\n";
 
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";
 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
 
// redirect to success page
if ($success){
   echo "Thanks for your Message";
}else{
    echo "Something is going wrong";
}
 
?>