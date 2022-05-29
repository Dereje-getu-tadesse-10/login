<?php

try {
    $dbh = new PDO('mysql:host=localhost;dbname=login', "phpmyadmin", "");
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    die();
}
