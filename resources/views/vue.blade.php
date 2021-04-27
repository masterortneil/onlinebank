<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link
      href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet"/>
    <title>My Bank</title>
    <script>
        window.baseUrl = '{{request()->getSchemeAndHttpHost()}}'
        window.isLogin = '{{auth()->check()}}'
    </script>
</head>
<body>
<div id="app">

</div>
<script src="{{ mix('js/app.js') }}"></script>

</body>
</html>
