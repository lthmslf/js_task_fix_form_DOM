'use strict';
const body = document.querySelector('body');
const inputs = body.querySelectorAll('input');
const fields = body.querySelectorAll('.field');
for(let i = 0; i < inputs.length; i++){
    const label = document.createElement('label');
    label.setAttribute('for', `${inputs[i].id}`);
    label.className = 'field-label';
    label.textContent = inputs[i].name.toUpperCase();
    fields[i].appendChild(label);
    inputs[i].setAttribute('placeholder', `${inputs[i].name.slice(0, 1).toUpperCase() + inputs[i].name.slice(1).toLowerCase()}`);
}

//# sourceMappingURL=js_task_fix_form_DOM.f75de5e1.js.map
