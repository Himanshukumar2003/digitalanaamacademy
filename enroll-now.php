<?php

  if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $address = $_POST['address'];
    $town = $_POST['town'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $pincode = $_POST['pincode'];
    $course = $_POST['course'];
    $amount = $_POST['amount'];
    $messages = $_POST['message'];
    $to = "digitalanaamacademy@gmail.com";
    $subject = "Enroll Now";
     $message = "Name :".$name . "\n";
     $message.= "Email :".$email . "\n";
     $message.= "Phone :".$phone . "\n";
     $message.= "Adress :".$address . "\n";
     $message.= "Town/City :".$town . "\n";
     $message.= "State :".$state . "\n";
     $message.= "Country :".$country . "\n";
     $message.= "Pincode :".$pincode . "\n";
     $message.= "Course :".$course . "\n";
     $message.= "Amount :".$amount . "\n";
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