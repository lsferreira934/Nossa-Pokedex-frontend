async function signup(inputs) {
    try {
        const sendValues = { roles: ['user'] }
        if (Array.isArray(inputs)) {
            inputs.forEach((input) => {
                const element = document.querySelector(input)
                sendValues[input.replace('#', '')] = element.value;
            })
        }




        const response = await post('signup', sendValues);

        if (response.status != 200) {
          
            showModal({
                title: 'Error ao cadastrar',
                message: 'Não foi possivel cadastrar!',
                button: 'Ok',
                redirect: "cadastro.html"
            })
        } else {
            showModal({
                title: 'Cadastro de usuário',
                message: 'Usuário cadastrado com sucesso!',
                button: 'Ok',
                callback: () => window.location.href = '/page/index.html'
            })
        }


    } catch (error) {
        console.log(error);
    };
}
