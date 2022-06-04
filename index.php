<?php

// swicth case for a router in index.php
$request = $_SERVER['REQUEST_URI'];
$url = explode('/', $_SERVER['REQUEST_URI']);
switch ($url[2]) {
    case '':
        require __DIR__ . '/views/login.php';
        break;
    case '/login':
        require __DIR__ . '/views/login.php';
        break;
    case '/register':
        require __DIR__ . '/views/sing-up.php';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/views/login.php';
        break;
}
