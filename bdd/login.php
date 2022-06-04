<?php

// $errs = [];
// $regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";

// if (empty($_POST['email-log'])) {
//     $errs[] = "Email is required";
// } else if (!preg_match($regEx, $_POST['email-log'])) {
//     $errs[] = "Email is not valid";
// } else if (empty($_POST['password-log'])) {
//     $errs[] = "Password is required";
// } else if (strlen($_POST['password-log']) < 8) {
//     $errs[] = "Password is too short";
// } else {
//     $emailLog = $_POST['email-log'];
//     $passwordLog = $_POST['password-log'];
// }

if (empty($errs)) {
    require_once 'conn.php';
    // VERIFY IF USER EXIST IN THE DATABASE AND LOGIN  USER TO ANOTHER PAGE
    $sql = 'SELECT * FROM `user` WHERE `email` = :email';
    $query = $conn->prepare($sql);
    $query->bindValue(':email', $emailLog);
    $query->execute();
    $user = $query->fetch(PDO::FETCH_ASSOC);

    if ($user) {
        $hash =  $user['mot_de_passe'];
        if (password_verify($passwordLog, $hash)) {
            session_start();
            $_SESSION['user'] = $user;
            $success = array('success' => "connecté");
            echo json_encode($success);
        } else {
            $failed = array('failed' => "Email or password is incorrect");
            echo json_encode($failed);
        }
    } else {
        $failed = array('failed' => "Email or password is incorrect");
        echo json_encode($failed);
    }
}
