function jprdy() {
    console.log('new question');
    let request = new XMLHttpRequest();
    request.open('GET', 'http://jservice.io/api/random');
    request.addEventListener('load', function () {
        console.log('got the target')
        let delivery = JSON.parse(request.responseText);
        console.log(delivery);
        let questioncontainer = delivery[0];
        console.log(questioncontainer);

        let x = questioncontainer.question;
        let y = questioncontainer.answer;
        let textbox = document.createElement('input');
        let questionbox = document.createElement('div');
        questionbox.textContent = x;
        let questionparent = document.querySelector('body')
        questionparent.appendChild(questionbox);
        questionparent.appendChild(textbox);
       

        let checkbtn = document.getElementById('checkbtn');
        checkbtn.addEventListener('click', function () {
            let textboxcontent = textbox.value;

            if (textboxcontent === y) {
                questionbox.classList.add('correctcolor');
                // questionbox.className = 'correctcolor';
                questionparent.removeChild(questionbox);
                questionparent.removeChild(textbox);
                jprdy();
                
            } else {
                questionbox.classList.add('incorrectcolor');
                // questionbox.className = 'incorrectcolor';
            }
        })




    });
    request.send();
}

window.addEventListener('load', function () {
    jprdy();
})


