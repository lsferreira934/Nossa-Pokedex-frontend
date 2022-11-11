import { showModal } from './module/modal.js'
import { getInputs } from './module/utilities.js'
import { setLocalStorage, getLocalStorage, removeLocalStorage } from './module/localStorage.js'
import { validateInputs, resetValidateInputs, validatePassword } from './module/validation.js'
import { post } from '../api/index.js'

async function signup(inputs) {
    try {
        const sendValues = getInputs(inputs);
        const response = await post('signup', sendValues);

        if (response.status != 200) {
            showModal({
                title: 'Error ao cadastrar',
                message: 'Não foi possivel cadastrar!',
                button: 'Ok',
            })
        } else {
            showModal({
                title: 'Cadastro de usuário',
                message: 'Usuário cadastrado com sucesso!',
                button: 'Ok',
                redirect: 'login.html'
            })
        }
    } catch (error) {
        console.log(error);
    };
}

async function login(inputs) {
    try {
        const sendValues = getInputs(inputs);
        const response = await post('signin', sendValues);

        if (response.status != 200) {
            showModal({
                title: 'Error ao logar',
                message: 'Não foi possivel logar.',
                button: 'Ok',
            });
        } else {
            const data = await response.json();
            setLocalStorage(data);
            getLocalStorage('user');
            showModal({
                title: 'Login',
                message: 'Usuário logado com sucesso.',
                button: 'Ok',
                redirect: 'main.html'
            });
        };
    } catch (error) {
        console.log(error);
    };
}

async function logoff() {
    try {
       
        const response = await post('logoff');

        if (response.status != 200) {
            removeLocalStorage('user');

            showModal({
                title: 'Error',
                message: 'Falha na aplicação.',
                button: 'Ok',
                redirect: 'login.html',
            });

        } else {
            showModal({
                title: 'Logoff',
                message: 'Logoff com sucesso.',
                button: 'Ok',
                redirect: 'login.html'
            });
        };
    } catch (error) {
        console.log(error);
    };
}


window.addEventListener('load', () =>{
    const btLogin = document.querySelector('#bt-login');
    const btSignup = document.querySelector('#bt-signup');
    
    if(!!btLogin) btLogin.addEventListener('click', () => login(['#email', '#password']));
    if(!!btSignup) btSignup.addEventListener('click', () => validateInputs(['.validate-name','.validate-email','.validate-password','.validate-repite-password' ], [signup(['#name', '#email', '#password'])]));

    validatePassword(['.validate-password', '.validate-repite-password']);
    resetValidateInputs(['.validate-name', '.validate-email']);
})


