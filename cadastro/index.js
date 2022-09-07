window.addEventListener('load', () => {
    const submit = document.querySelector('#submit');
    submit.addEventListener('click', ()=> signup());

    async function signup(){
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const password = document.querySelector('#password');

        console.log(name.value, email.value, password.value);

        try {
            const response = await post('signup',{
                name: name.value,
                email: email.value,
                password: password.value,
                roles: ['user']
            })

            window.location.href ='/tela-de-login/index.html'
        } catch (error) {
            throw new Error(alert(error))
        }
    }
    





})