<?php

App::error(function(Exception $exception, $code)
{
    return View::make('errors/500');
});