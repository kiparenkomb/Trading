<?php

$frm_name  = "admin";
$recepient = "kiparenkomb@gmail.com";
$sitename  = "TestSite";
$subject   = "Новая заявка с сайта \"$sitename\"";


$userName = trim($_POST["userName"]);
$userEmail = trim($_POST["userEmail"]);
$userPhone = trim($_POST["userPhone"]);
$userMessage = trim($_POST["userMessage"]);



$message = "
<b>Имя:</b> $name <br>
<b>E-mail:</b> $email <br>
<b>Телефон:</b> $phone <br>
<b>Сообщение:</b> $message <br>
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
