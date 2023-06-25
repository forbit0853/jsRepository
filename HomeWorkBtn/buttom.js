
class MyButton {
    constructor(text, btnClass) {
      this.text = text;
      this.btnClass = btnClass;
    }
  
    get value() {
      return this.text;
    }
  
    set value(newText) {
      this.text = newText;
    }
  
    show() {
      const container = document.getElementById('buttons-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = this.btnClass;
      button.innerText = this.text;
      container.appendChild(button);
    }
  }
  
  class ColorButton extends MyButton {
    constructor(text, btnClass, colorClass) {
      super(text, btnClass);
      this.colorClass = colorClass;
    }
  
    show() {
      const container = document.getElementById('buttons-container');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `${this.btnClass} ${this.colorClass}`;
      button.innerText = this.text;
      container.appendChild(button);
    }
  }

  const styleElement = document.createElement('style');
  styleElement.innerHTML = `
  .btn {
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
  }
  
  .btn-primary {
    background-color: #77bff;
    color: #fff;
  }
  
  .btn-success {
    background-color: #28a745;
    color: #fff;
  }
  
  .btn-danger {
    background-color: #dc3545;
    color: #fff;
  }
  `;
  document.head.appendChild(styleElement);
  
  const container = document.createElement('div');
  container.id = 'buttons-container';
  document.body.appendChild(container);

  const btn1 = new MyButton('Save Progress', 'btn btn-primary');
  const btn2 = new MyButton('Click Me', 'btn btn-primary');
  const btn3 = new MyButton('Download', 'btn btn-primary');
  const btn4 = new ColorButton('See more', 'btn', 'btn-danger');
  
  btn1.show();
  btn2.show();
  btn3.show();
  btn4.show();

  btn4.value = 'Changed Text';
  btn4.show();
  
