<?php

  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $to = "digitalanaamacademy@gmail.com";
    $subject = "Need Brochure";
     $message = "Name :".$name . "\n";
     $message.= "Email :".$email . "\n";
     $message.= "Phone :".$phone . "\n";
     $header = "From: " . $email;
     if (mail($to,$subject,$message,$header)) {
        header("location:index.html");
      }
      else{
        echo "<script>alert('Error Occured')</script>";
      }
}

?>