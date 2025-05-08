<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);
    
    if ($name && $email && $message) {
        $to = "nettdesignmagi@gmail.com";
        $subject = "New Contact Form Submission";
        $headers = "From: $email";
        
        mail($to, $subject, $message, $headers);
        echo json_encode(["status" => "success"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid input"]);
    }
}
?>
