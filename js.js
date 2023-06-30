
function formSubmitions() {
    let name = document.getElementById('name');
    let num = document.getElementById('num');
    let mail = document.getElementById('mail');
    let btn = document.getElementById('btn');
    let requests = [];
  
    function validatePhoneNumber(input) {
        const phoneRegex = /^(\+?7|8)\s?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
        return phoneRegex.test(input);
    }
  
    function validateEmail(input) {
        const emailRegex = /^\S+@\S+\.\S+$/;
        return emailRegex.test(input);
    }
  
    btn.addEventListener('click', () => {
        if (name.value !== '' && num.value !== '' && mail.value !== '') {
            if (validatePhoneNumber(num.value)) {
                if (validateEmail(mail.value)) {
                    let data = name.value + ' ' + num.value + ' ' + mail.value;
                    requests.push(data);
                    console.log(requests);
                } 
                else {
                    console.log('Неверный формат электронной почты');
                    alert('Неверный формат электронной почты. Введите корректный');
                }
            } 
            else {
            console.log('Неверный формат номера телефона');
            alert('Неверный формат номера телефона. Введите корректный');
            }
        }
        else{
            alert('Введите все поля!')
        }
    });
}
  

function checkLink(){
    let links = document.querySelectorAll('a')
    
    for (let i = 0; i < links.length; i++){
        links[i].addEventListener('click', () => {
            console.log('Complete (link)')
        })
    }
}

function checkBtns(){
    let buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', () => {
            console.log('Complete (button)')
        })
    }
}


formSubmitions()
checkLink()
checkBtns()

