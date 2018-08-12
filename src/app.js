import MathService from './MathService.js';

class IndexView {
    
    constructor() {

        console.log('instantiating IndexView');
        
        this.service = new MathService();


        this.valueA = document.querySelector('#valueA');
        this.valueB = document.querySelector('#valueB');
        this.operator = document.querySelector('#operator');
        this.audio = document.querySelector('#audio22');
        this.result = document.querySelector('#inResult');
        this.result.onkeydown = e => this.onEnter(e);



        this.imageResult = document.querySelector('#imgResult');
        this.imageResult1 = document.querySelector('#imgResult1');
        this.imageResult2 = document.querySelector('#imgResult2');
        this.imageResult3 = document.querySelector('#imgResult3');
        this.imageResult4 = document.querySelector('#imgResult4');
        this.imageResult5 = document.querySelector('#imgResult5');
        this.newButton = document.querySelector("#btnNew");
        this.newButton.onclick = e => this.challenge(e);
        this.validateButton = document.querySelector("#btnValidate");
        this.validateButton.onclick = e => this.validate(e);
        // this.result. = e => this.validate(e);
        console.log('init done')
        this.imageResult.setAttribute('src', 'picZ/math.jpeg');
        
        this.valueA.textContent = 5;
        this.valueB.textContent = 3;
        this.operator.textContent = '+';
    }

    challenge(e) {
        console.log('challenge');
        this.imageResult.setAttribute('src', 'picZ/math.jpeg');
        this.result.focus();
        this.result.value = '';
        this.valueA.textContent = this.service.randomIntFromInterval(0, 21);
        this.valueB.textContent = this.service.randomIntFromInterval(0, 21);
        this.operator.textContent = '+';

    }

    validate(e){
        console.log('validate '+ this.result.value);
        // console.dir(e);
        const result = parseInt(this.valueA.textContent) + parseInt(this.valueB.textContent);
        let audioResult = 'audio/homer_no.mp3';
        let imageResult = 'picZ/omg-ape.jpg';
        console.log(result + ' vs. ' + this.result.value);

        if(result === parseInt(this.result.value)) {
            audioResult = 'audio/darth-vader_breath.mp3';
            imageResult = 'picZ/darth-vader.png';
            // this.imageResult.setAttribute('src', 'picZ/darth-vader.png');
            // this.audio.setAttribute('src', 'audio/darth-vader_breath.mp3');
            // this.audio.setAttribute('src', 'audio/homer_woho.mp3');
        } else {
            // this.imageResult.setAttribute('src', 'picZ/omg-ape.jpg');
            // this.audio.setAttribute('src', 'audio/homer_no.mp3');
        }
        this.imageResult.setAttribute('src', imageResult);
        this.audio.setAttribute('src', audioResult);

    }

    onEnter(e) {
        console.log('onEnter '+e.keyCode);
        if(e.keyCode === 13) {
            this.validate(e);
        }
        if (e.keyCode === 39) {
            this.challenge(e);
        }
    }

}

new IndexView();


