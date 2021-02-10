@extends("layouts.app")

@section('title', 'E Store - Login & Register')

@section("breadcrumb")
    @php
    $items = ['home' => route('home'), 'Login & Register' => route('auth')];
    @endphp
    <x-breadcrumb :items="$items" />
@endsection

@section('content')

    <div class="login">
        <div class="container-fluid">
            <div class="row">
                <div class="col-lg-6">
                    @preact([
                        "id" => "login",
                        "props" => [
                            "csrf" => csrf_token(),
                            "action" => route("login"),
                            "redirect" => route("home"),
                            "register" => route("register"),
                            "authGoogle" => route("socialite.redirect", ["provider" => "google"]),
                            "authFacebook" => route("socialite.redirect", ["provider" => "facebook"]),
                            "auth" => route("auth"),
                        ]
                    ])
                </div>
                <div class="col-lg-6">
                    @preact([
                        "id" => "register",
                        "props" => [
                            "csrf" => csrf_token(),
                            "action" => route("register"),
                            "redirect" => route("home"),
                            "login" => route("login"),
                            "auth" => route("auth"),
                        ]
                    ])
                </div>
            </div>
        </div>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset('js/login.js') }}"></script>
    <script src="{{ asset('js/register.js') }}"></script>
@endpush