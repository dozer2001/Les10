'use strict';

class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }

    createDiv() {
        let div = document.createElement('div');
        div.style.cssText = ` height: ${this.height}px;
         width: ${this.width}px;
         font-size:${this.fontSize}px;        
         background: ${this.bg} ;
         text-align:${this.textAlign};`;
        div.textContent = 'CLICK ME';
        let body = document.querySelector('body');
        body.appendChild(div);
        div.addEventListener('click',function () {
            let text = prompt('Введите текст');
            div.textContent = text;
        })
    }
}

let newOption = new Option(300,300,"yellow",20,"center");
newOption.createDiv();
