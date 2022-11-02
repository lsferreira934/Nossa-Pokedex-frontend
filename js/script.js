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

