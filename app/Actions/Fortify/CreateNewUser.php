<?php

namespace App\Actions\Fortify;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {
        Validator::make($input, [
            'firstName' => ['required', 'string', 'max:255'],
            'lastName' => ['required', 'string', 'max:255'],
            'mobile' => ['nullable', 'string', 'max:255'],
            'email' => [
                'required',
                'string',
                'email',
                'max:255',
                Rule::unique(User::class),
            ],
            'password' => $this->passwordRules(),
        ])->validate();

        if (empty($input['mobile'])) {
            return User::create([
                'first_name' => $input['firstName'],
                'last_name' => $input['lastName'],
                'email' => $input['email'],
                'password' => Hash::make($input['password']),
            ]);
        }
        return User::create([
            'first_name' => $input['firstName'],
            'last_name' => $input['lastName'],
            'mobile' => $input['mobile'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
        ]);
    }
}
