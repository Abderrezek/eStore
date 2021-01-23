<?php

namespace App\Http\Livewire\Auths;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;
use Livewire\Component;

class Register extends Component
{
    public string $action = "";
    public string $first_name = "";
    public string $last_name = "";
    public string $mobile = "";
    public string $email = "";
    public string $password = "";
    public string $password_confirmation = "";

    public function rules(): Array
    {
        return [
            "first_name" => ["required", "max:100", "not_regex:/(\.|\_|\-|\*|\+|\/|\d)/"],
            "last_name" => ["required", "max:100", "not_regex:/(\.|\_|\-|\*|\+|\/|\d)/"],
            "mobile" => ["required", "regex:/^(0(5|6|7)\d{8})$/"],
            "email" => ["required", "email", Rule::unique(User::class)],
            "password" => "required|confirmed|min:8",
        ];
    }

    protected $messages = [
        "mobile.regex" => "Phone number is incorrect",
    ];

    public function mount($action)
    {
        $this->action = $action;
    }

    public function save()
    {
        $this->validate();

        $user = User::create([
            "first_name" => $this->first_name,
            "last_name" => $this->last_name,
            "mobile" => $this->mobile,
            "email" => $this->email,
            "password" => Hash::make($this->password),
        ]);

        auth()->login($user);

        return redirect("/");
    }

    public function render()
    {
        return view('livewire.auths.register');
    }
}
