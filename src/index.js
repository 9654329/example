import Vue from 'vue';

var app = new Vue({
    el: '#app',
    data: {
        name: '',
        name_message:'',
        company:'',
        company_message:'',
        tel:'',
        tel_message:''
    },
    methods: {
        send() {
            if (this.name.length == 0) {
                this.name_message = '入力してください';
            } else {
                this.name_message = '';
            }
            if (this.company.length == 0) {
                this.company_message = '入力してください';
            } else {
                this.company_message = '';
            }
            if (this.tel.length == 0) {
                this.tel_message = '入力してください';
            } else {
                this.tel_message = '';
            }
        }
    }
});
