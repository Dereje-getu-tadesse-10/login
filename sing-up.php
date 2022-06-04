<?php

$errs = [];
$regEx = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/";

// mail vide + regex
if (empty($_POST['email'])) {
    $errs[] = "Email is required";
} else if (!preg_match($regEx, $_POST['email'])) {
    $errs[] = "Email is not valid";
} else if (empty($_POST['password'])) {
    $errs[] = "Password is required";
} else if (strlen($_POST['password']) < 8) {
    $errs[] = "Password is too short";
} else {
    $emailSingUp = strip_tags($_POST['email']);
    $passwordSingUp = strip_tags($_POST['password']);
}

if (empty($errs)) {
    require_once 'conn.php';
    $hashedPass = password_hash($passwordSingUp, PASSWORD_DEFAULT);
    $sql = 'INSERT INTO `user` (`email`, `mot_de_passe`) VALUES (:email, :password)';
    $query = $conn->prepare($sql);
    $query->bindValue(':email', $emailSingUp, PDO::PARAM_STR);
    $query->bindValue(':password', $hashedPass, PDO::PARAM_STR);
    $query->execute();

    if ($query) {
        $success = array('success' => "inscription reussi");
        echo json_encode($success);
    } else {
        $failed = array('failed' => "inscription echoue");
        echo json_encode($failed);
    }
}
