let app = new Vue({
    el: '#element',
    data: {
        show: true,
        messageAlert: '',
        showAlert : false,
        statusAlert : 'alert alert-success'
    },
    methods: {
        login() {
            this.statusAlert = 'alert alert-success',
            this.messageAlert = 'Logado com sucesso!',
            this.showAlert = !this.showAlert;
        },
        include(){
            this.statusAlert = 'alert alert-warning',
            this.messageAlert = 'Cadastrado com sucesso!',
            this.showAlert = !this.showAlert;
        }
    }
})