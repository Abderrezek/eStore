@extends("layouts.app")

@section("title", "E Store - Register")

@section("breadcrumb")
    @php
    $items = ['home' => route('home'), 'Register' => route('register')];
    @endphp
    <x-breadcrumb :items="$items" />
@endsection

@section("content")

    <div class="login" style="margin-top: -30px">
        <div class="col-lg-6 mx-auto">

            @preact([
                "id" => "register",
                "props" => [
                    "csrf" => csrf_token(),
                    "action" => route("register"),
                    "redirect" => route("home"),
                    "login" => route("login"),
                ]
            ])

        </div>
    </div>

@endsection

@push('scripts')
    <script src="{{ asset('js/register.js') }}"></script>
@endpush