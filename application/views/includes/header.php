<!DOCTYPE html>
<html lang="en" dir="ltr">

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />

<head>

	<!-- Meta data -->
	<meta charset="UTF-8">
	<meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0'>
	<meta content="" name="description">
	<meta content="Spruko Technologies Private Limited" name="author">
	<meta name="keywords" content="admin dashboard, dashboard ui, backend, admin panel, admin template, dashboard template, admin, bootstrap, laravel, laravel admin panel, php admin panel, php admin dashboard, laravel admin template, laravel dashboard, laravel admin panel" />

	<!-- Title -->
	<title>Reborn - Crm</title>

	<!--Favicon -->
	<link rel="icon" href="<?= base_url() ?>assets/images/brand/reborn_logo.png" type="image/x-icon" />

	<!-- Bootstrap css -->
	<link href="<?= base_url() ?>assets/plugins/bootstrap/css/bootstrap.css" rel="stylesheet" />

	<!-- Style css -->
	<link href="<?= base_url() ?>assets/css/style.css" rel="stylesheet" />
	<link href="<?= base_url() ?>assets/css/dark.css" rel="stylesheet" />
	<link href="<?= base_url() ?>assets/css/skin-modes.css" rel="stylesheet" />

	<!-- Animate css -->
	<link href="<?= base_url() ?>assets/plugins/animated/animated.css" rel="stylesheet" />

	<!--Sidemenu css -->
	<link href="<?= base_url() ?>assets/css/sidemenu.css" rel="stylesheet">

	<!-- P-scroll bar css-->
	<link href="<?= base_url() ?>assets/plugins/p-scrollbar/p-scrollbar.css" rel="stylesheet" />

	<!---Icons css-->
	<link href="<?= base_url() ?>assets/plugins/icons/icons.css" rel="stylesheet" />

	<!---Sidebar css-->
	<link href="<?= base_url() ?>assets/plugins/sidebar/sidebar.css" rel="stylesheet" />

	<!-- Select2 css -->
	<link href="<?= base_url() ?>assets/plugins/select2/select2.min.css" rel="stylesheet" />


	<!--- INTERNAL jvectormap css-->
	<link href="<?= base_url() ?>assets/plugins/jvectormap/jqvmap.css" rel="stylesheet" />

	<!-- INTERNAL Data table css -->
	<link href="<?= base_url() ?>assets/plugins/datatable/css/dataTables.bootstrap4.min.css" rel="stylesheet" />

	<!-- INTERNAL Time picker css -->
	<link href="<?= base_url() ?>assets/plugins/time-picker/jquery.timepicker.css" rel="stylesheet" />

	<!-- INTERNAL jQuery-countdowntimer css -->
	<link href="<?= base_url() ?>assets/plugins/jQuery-countdowntimer/jQuery.countdownTimer.css" rel="stylesheet" />


	<!-- INTERNAL Switcher css -->
	<link href="<?= base_url() ?>assets/switcher/css/switcher.css" rel="stylesheet" />
	<link href="<?= base_url() ?>assets/switcher/demo.css" rel="stylesheet" />

</head>

<body class="app sidebar-mini" id="index1">

	<!---Global-loader-->
	<div id="global-loader">
		<img src="<?= base_url() ?>assets/images/svgs/loader.svg" alt="loader">
	</div>


    <div class="page">
	<div class="page-main">

		<?php include 'application/views/includes/sidebar.php'; ?>

		<div class="app-content main-content">
			<div class="side-app">

			<?php include 'application/views/includes/app-header.php'; ?>