@extends("layouts.app")

@section("title", "E Store - Register")

@section("content")

    <div class="login">
        <div class="col-lg-6 mx-auto">
            <div class="register-form">

                <livewire:auths.register
                    action="{{ route('register') }}"
                />

            </div>
        </div>
    </div>

@endsection