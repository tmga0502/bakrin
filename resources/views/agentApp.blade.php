<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1,  maximum-scale=1.0">

    <title>Bakrin | 代理店様用</title>

    <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

	<link rel="stylesheet" href="{{ url('assets/css/reset.css') }}">
    {{-- react に変更があったとき自動で --}}
{{--    @viteReactRefresh--}}
    @vite(['resources/css/app.css', 'resources/scss/app.scss', 'resources/react/app/agentApp/index.tsx'])

</head>

<body>
<div id="app"></div>
</body>
</html>
