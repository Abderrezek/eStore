@extends("layouts.app")

@section('title', 'E Store - Login')

@section("breadcrumb")
    @php
    $items = ['home' => route('home'), 'Login' => route('login')];
    @endphp
    <x-breadcrumb :items="$items" />
@endsection

@section('content')

    <div class="login" style="margin-top: -30px">
        <div class="col-lg-6 mx-auto">

            @preact([
                "id" => "login",
                "props" => [
                    "csrf" => csrf_token(),
                    "action" => route("login"),
                    "redirect" => route("home"),
                    "register" => route("register"),
                    "authGoogle" => route("socialite.redirect", ["provider" => "google"]),
                    "authFacebook" => route("socialite.redirect", ["provider" => "facebook"]),
                ]
            ])

        </div>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset('js/login.js') }}"></script>
@endpush