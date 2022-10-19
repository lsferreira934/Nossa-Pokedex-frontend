function validateInputs(inputs, callbacks) {
    if (Array.isArray(inputs)) {
        inputs.forEach((input) => {
            const newInput = document.querySelector(input);

            if (input === '.validate-password' || input == '.validate-repite-password') {
                if (!newInput.classList.contains('is-valid' || 'is-invalid')) {
                    if (newInput.value.length === 0) newInput.classList.add('is-invalid');
                }
                const password = document.querySelector('.validate-password');
                const repitePassword = document.querySelector('.validate-repite-password');

                if (password.value !== repitePassword.value) {
                    password.value = ''
                    repitePassword.value = ''

                    password.classList.remove('is-valid');
                    password.classList.add('is-invalid');

                    repitePassword.classList.remove('is-valid');
                    repitePassword.classList.remove('is-invalid');
                }

            } else {
                newInput.classList.remove('is-invalid');
                newInput.classList.remove('is-valid');

                if (newInput.value.length > 0) newInput.classList.add('is-valid');
                else newInput.classList.add('is-invalid');
            }
        })
    } else {
        const newInput = document.querySelector(inputs);

        newInput.classList.remove('is-invalid');
        newInput.classList.remove('is-valid');

        if (newInput.value.length === 0) {
            newInput.classList.add('is-invalid')
        } else {
            newInput.classList.add('is-valid')
        }
    }

    if (Array.isArray(callbacks)) {
        callbacks.forEach(callback => [callback])
    } else {
        [callbacks]();
    }
}

function validatePassword(inputs) {
    const passwordInput = document.querySelector(inputs[0]);
    const repitePasswordInput = document.querySelector(inputs[1]);
    const checkPassword = document.querySelector('.check-repite-password');

    let passwordInputValue;
    let repitePasswordInputValue;

    passwordInput.addEventListener('input', (e) => {
        passwordInput.classList.remove('is-invalid');
        passwordInput.classList.remove('is-valid');

        if (e.target.value.length >= 6) {
            passwordInput.classList.add('is-valid');
            passwordInputValue = e.target.value
        } else {
            passwordInput.classList.add('is-invalid');
            passwordInputValue = e.target.value
        }
    })

    repitePasswordInput.addEventListener('input', (e) => {
        repitePasswordInput.classList.remove('is-invalid');
        repitePasswordInput.classList.remove('is-valid');
        checkPassword.innerText = 'Porfavor, repita a senha informada.'

        repitePasswordInputValue = e.target.value

        if (passwordInputValue === repitePasswordInputValue) {
            repitePasswordInput.classList.add('is-valid');
            repitePasswordInputValue = e.target.value
        } else {
            repitePasswordInput.classList.add('is-invalid');
            checkPassword.innerText = 'Senhas não conferem'
            repitePasswordInputValue = e.target.value
        }
    })
}

function resetValidateInputs(inputs) {
    if (Array.isArray(inputs)) {
        inputs.forEach((input) => {
            const element = document.querySelector(input);
            element.addEventListener('input', (e) => {
                if (input.includes('email') && !e.target.value.includes('@')) {
                    element.classList.add('is-invalid');
                    return;
                }
                element.classList.remove('is-invalid');
                element.classList.remove('is-valid');
            })
        })
    }

}



