<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function

$name = $_POST['Name'];
$phone = $_POST['Phone'];
$email = $_POST['Email'];
$feedback = $_POST['Feedback'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';
require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/autoload.php';

//Instantiation and passing `true` enables exceptions
$mail = new PHPMailer();
$mail->CharSet = 'utf-8';


//Server settings
$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.mail.ru';                         //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = '';                    //SMTP username
$mail->Password   = '';                               //SMTP password
// $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         //Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
$mail->SMTPSecure = 'ssl';
$mail->Port       = 465;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

//Recipients
$mail->setFrom('', 'scWEB');
$mail->addAddress('', 'Evgeny P');     //Add a recipient
// $mail->addAddress('ellen@example.com');                   //Name is optional
// $mail->addReplyTo('info@example.com', 'Information');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');

//Attachments
// $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

//Content
$mail->isHTML(true);                                  //Set email format to HTML
$mail->Subject = 'Новый отзыв на simplycity WEB от ' . $name;
$mail->Body    = 'Тёма, Даня, привет!,  <br><br>
Оставлен новый отзыв на simplycity WEB:
<ul>
	<li>
		Имя: ' . $name . '
	</li>
	<li>
		Телефон: ' . $phone . '
	</li>
	<li>
		E-mail: ' . $email . '
	</li>
	<li>
		Отзыв: "' . $feedback . '"
	</li>
</ul>';

$mail->AltBody = 'Оставлен новый отзыв на simplycity WEB от ' . $name . '(' . $phone . ', ' . $email . '): "' . $feedback . '"';

if ($mail->Send()) {
  return false;
} else {
  return true;
};

$mail->smtpClose();

?>
