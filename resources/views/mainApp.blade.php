<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0">

    <title>バクリン</title>

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;300;400;500;700;800;900&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="{{ url('assets/css/reset.css') }}">
    {{-- react に変更があったとき自動で --}}
{{--    @viteReactRefresh--}}
    @vite(['resources/css/app.css', 'resources/scss/app.scss', 'resources/react/app/mainApp/index.tsx'])

</head>

<body>
<div id="app"></div>
</body>
</html>
