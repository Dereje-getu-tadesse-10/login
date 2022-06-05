<?php

if (isset($_POST['logout'])) {
    session_unset();
    // close the session user bdd connection
    session_destroy();
    header('Location: index.html');
}
