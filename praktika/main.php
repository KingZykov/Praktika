<?php 
if(isset($_SESSION['user'])) {
	header('Location: projects.php');
	die();
} else {
	require 'views/login.php';
}

?>