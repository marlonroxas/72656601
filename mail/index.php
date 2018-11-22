<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: OPTIONS, GET, POST');
header('Access-Control-Allow-Headers: *');
// Setup PHP Settings
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
date_default_timezone_set('Asia/Manila');
require 'phpmailer/PHPMailerAutoload.php';
require_once 'mail_config.php';

/**
 * INSTRUCTIONS TO RUN THIS LOCALLY
 * - Edit file to change MYSQL credentials defined.
 * - Check your PHP location by running the command in your terminal:
 *     which php
 * - Expected Output (result may vary):
 *     /usr/bin/php
 * - Lastly, Run script (change filename accordingly):
 *     /usr/bin/php filename.php
 */


function template($from_name, $to_name, $message)
{
    $html = '
    <html>
        <head>
        <style type="text/css">
            @import url(https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,600,700,800,900);
            body{
                font-family: \'Montserrat\', sans-serif;
                font-size: 14px;
                font-weight: 300;
                white-space: normal;
                line-height: normal;
                background: #eee;
            }
            .email-body{
                background: #fff;
                padding: 20px;
                width: 100%;
                margin: 0 auto;
                min-height: 350px;
                max-height: auto;
            }
            .footer{
                position: relative;
                bottom: 0;
                padding: 20px;
                width: 100%;
                margin: 0 auto;
            }
            .footer .provider{
                padding: 10px;
                background: #ccc;
                text-align: center;
            }
            .header, .email-signature{
                font-weight: bold;
            }
            .provider{
                font-size: 10px;
            }
        </style>
        </head>
        <body>
            <div class="email-body">
                <div class="header">Hi '.$to_name.',</div>
                <div class="content">
                    <div class="email-message">
                        <!-- message here, put this block in variable -->
                        <p>' . $message . '</p>
                        <!-- end of message -->
                    </div>
                </div>
                <p class="sincerely">Greetings,</p>
                <p class="email-signature">'.$from_name.'</p>
            </div>
            <div class="footer">
                <div class="provider">All rights reserved. Powered by <a href="http://circletechit.com/" target="_blank">Corecircle IT Solutions</a>.</div>
            </div>
        </body>
    </html>';


    return $html;
}



function mailer($to_email, $to_name, $from_email, $from_name, $subject, $body) {
    $mail = new PHPMailer();
    $mail->IsSMTP(true);
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = MAIL_ENCRYPT;
    $mail->Mailer = MAIL_TYPE;
    $mail->Host = MAIL_HOST;
    $mail->Port = 587;
    $mail->Username = MAIL_FROM_ADDRESS;
    $mail->Password = MAIL_PASSWORD;

    $mail->From = MAIL_FROM_ADDRESS;
    $mail->FromName = MAIL_FROM_NAME;

    $mail->SetFrom(MAIL_FROM_ADDRESS, MAIL_FROM_NAME);
    $mail->AddReplyTo($from_email, $from_name);
    $mail->isHTML(true);
    $mail->AddAddress($to_email, $to_name);

    $mail->Subject = $subject;
    $mail->Body = $body;

    $log_msg = "Mail " . $to_name . " with subject " . $subject . ". ";
    if( $mail->send() ) {
        echo json_encode([$log_msg]);
    } else {
        echo json_encode(["ERROR: ". $log_msg]);
    }
}

if (isset($_POST['to_email']) && isset($_POST['to_name']) &&  isset($_POST['subject']) && isset($_POST['body']) && isset($_POST['from_email']) && isset($_POST['from_name'])) {
  $body = template($_POST['from_name'], $_POST['to_name'], $_POST['body']);
  mailer($_POST['to_email'], $_POST['to_name'], $_POST['from_email'], $_POST['from_name'], $_POST['subject'], $body);
  mailer('marlonroxas.dev@gmail.com', $_POST['to_name'], $_POST['from_email'], $_POST['from_name'], $_POST['subject'], $body);
  mailer('aimonbio@gmail.com', $_POST['to_name'], $_POST['from_email'], $_POST['from_name'], $_POST['subject'], $body);
}
