<form class="needs-validation" method="POST" action="{{ $action }}" wire:submit.prevent="save">
    @csrf
    @method("POST")

    <div class="form-row">
        {{-- First Name --}}
        <div class="col-md-6">
            <label for="id_first_name">First Name</label>
            <input
                class="form-control"
                id="id_first_name"
                type="text"
                name="first_name"
                placeholder="First Name"
                wire:model.defer="first_name"
            >
            @error("first_name")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        {{-- Last Name --}}
        <div class="col-md-6">
            <label for="id_last_name">Last Name</label>
            <input
                class="form-control"
                id="id_last_name"
                type="text"
                name="last_name"
                placeholder="Last Name"
                wire:model.defer="last_name"
            >
            @error("last_name")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        {{-- E-Mail --}}
        <div class="col-md-6">
            <label for="id_email">E-Mail</label>
            <input
                class="form-control"
                id="id_email"
                type="text"
                name="email"
                placeholder="E-Mail"
                wire:model.defer="email"
            >
            @error("email")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        {{-- Mobile No --}}
        <div class="col-md-6">
            <label for="id_mobile">Mobile No</label>
            <input
                class="form-control"
                id="id_mobile"
                type="text"
                name="mobile"
                placeholder="Mobile No"
                wire:model.defer="mobile"
            >
            @error("mobile")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        {{-- Password --}}
        <div class="col-md-6">
            <label for="id_password">Password</label>
            <input
                class="form-control"
                id="id_password"
                type="password"
                name="password"
                placeholder="Password"
                wire:model.defer="password"
            >
            @error("password")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        {{-- Password Confirmation --}}
        <div class="col-md-6">
            <label for="id_password_confirmation">Password Confirmation</label>
            <input
                class="form-control"
                id="id_password_confirmation"
                type="password"
                name="password_confirmation"
                placeholder="Password Confirmation"
                wire:model.defer="password_confirmation"
            >
            @error("password_confirmation")
                <div class="invalid-feedback" style="display: block; margin-top: -10px">
                    {{ $message }}
                </div>
            @enderror
        </div>

        <div class="col-md-12">
            <button class="btn" type="submit">Register</button>
        </div>
    </div>
</form>