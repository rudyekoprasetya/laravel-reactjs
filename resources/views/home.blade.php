<!DOCTYPE html>
<html>
<head>
	<title>Laravel + ReactJS</title>
	<!-- import css -->
	<link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">

	<!-- CSRF Token -->
	<meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body>

	<!-- element untuk render component reactjs -->
	<div id="app"></div>

	<!-- import lib reactjs -->
	<script type="text/javascript" src="{{asset('js/app.js')}}"></script>

</body>
</html>