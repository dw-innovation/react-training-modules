  function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = "Hello Webpack";

    btn.innerHTML = 'This is a button';

    element.appendChild(btn);

    return element;
  }

  document.body.appendChild(component());
