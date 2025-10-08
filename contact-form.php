<?php

  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $messages = $_POST['message'];
    $to = "digitalanaamacademy@gmail.com";
    $subject = "Contact Details";
     $message = "Name :".$name . "\n";
     $message.= "Email :".$email . "\n";
     $message.= "Phone :".$phone . "\n";
     $message.= "Address :".$address . "\n";
     $message.= "Message :".$messages . "\n";
     $header = "From: " . $email;
     if (mail($to,$subject,$message,$header)) {
        header("location:index.html");
      }
      else{
        echo "<script>alert('Error Occured')</script>";
      }
}

?>