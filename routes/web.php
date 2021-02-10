<?php

use App\Http\Controllers\SocialiteController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", fn () => view("home"))->name("home");

Route::get("/auth", fn () => view("auths.auth"))->name("auth");

Route::get("redirect/{provider}", [SocialiteController::class, "redirect"])->name("socialite.redirect");
Route::get("callback/{provider}", [SocialiteController::class, "callback"])->name("socialite.callback");

Route::fallback(fn () => view("404"));