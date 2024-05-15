<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>バクリン</title>

    <link rel ="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">

    

    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css','resources/scss/app.scss', 'resources/ts/index.tsx']); ?>

</head>

<body class="text-mainFont font-mainFontFamily bg-gray-100">
<div id="app"></div>
</body>
</html>
<?php /**PATH /var/www/html/resources/views/index.blade.php ENDPATH**/ ?>