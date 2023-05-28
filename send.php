<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

# проверка, что ошибки нет
if (!error_get_last()) {

    // Переменные, которые отправляет пользователь
    $name = $_POST['name'] ;
    $phone = $_POST['phone'];
    $comment = $_POST['comment'];
    $communication = $_POST['communication'];
    $orderData = $_POST['orderData'];
    
    
    // Формирование самого письма
    $title = "новая заявка";
    $body = "
    <h2>новый заказ</h2>
    <b>Имя:</b> $name<br>
    <b>телефон:</b> $phone<br><br>
    <b>тип связи:</b> $communication<br><br>
    <b>его заказ:</b> $orderData<br><br>
    <b>его комментарий:</b><br>$comment
    ";
    
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['data']['debug'][] = $str;};
    
    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'pluralism2@mail.ru'; // Логин на почте
    $mail->Password   = 'sj7Q1sHBaLKfztXyW3id'; // Пароль на почте iDL-64s-4KG-eAe, а тут указан сторонний
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('pluralism2@mail.ru', 'pluralism pluralism'); // Адрес самой почты и имя отправителя
    
    // Получатель письма
    $mail->addAddress('pluralism1@mail.ru');  //пароль от этого акка usp-uN8-LLJ-PQm
    
    // Отправка сообщения
    $mail->isHTML(true);
    $mail->Subject = $title;
    $mail->Body = $body;    
    
    // Проверяем отправленность сообщения
    if ($mail->send()) {
        $data['result'] = "success";
        $data['info'] = "Сообщение успешно отправлено!";
    } else {
        $data['result'] = "error";
        $data['info'] = "Сообщение не было отправлено. Ошибка при отправке письма";
        $data['desc'] = "Причина ошибки: {$mail->ErrorInfo}";
    }
    
} else {
    $data['result'] = "error";
    $data['info'] = "В коде присутствует ошибка";
    $data['desc'] = error_get_last();
}

// Отправка результата
// header('Content-Type: application/json');
// echo json_encode($data);

?>