<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguages('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    // from
    $mail->setFrom('maildevsendform@gmail.com', 'Cheniavkiy');
    // for
    $mail->addAddress('bredillya@gmail.com');
    // Theme letter
    $mail->Subject = 'Привет! Это письмо от нового заказчика.';

    // body letter
    $body = '<h1>Вот информация о заказчике</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }

    $mail->Body = $body;

    // sending
    if (!$mail->send()) {
        $massage = 'Данные отправленны!';
    } else {
        $massage = 'Fail!';
    }

    $response = ['massage' => $massage];
    header('Content-types: application/json');
    echo json_encode($response);
?>

