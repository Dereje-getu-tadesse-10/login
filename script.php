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
    $email = $_POST['email'];
    $password = $_POST['password'];
}

if (empty($errs)) {
    require_once 'conn.php';
    $sql = 'INSERT INTO `user` (`email`, `mot_de_passe`) VALUES (:email, :password)';
    $query = $conn->prepare($sql);
    $query->bindParam(':email', $email, PDO::PARAM_STR);
    $query->bindParam(':password', password_hash($password, PASSWORD_DEFAULT), pdo::PARAM_STR);
    $query->execute();

    if ($query->rowCount() > 0) {
        $failed = array('failed' => " User already exist");
        echo json_encode($failed);
    } else {
        $success = array('success' => "User added");
        echo json_encode($success);
    }
}
