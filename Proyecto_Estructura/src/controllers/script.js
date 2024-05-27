import { bst } from "./dependencies.js";
import Contact from 'src/models/tree/Contact.js';

document.getElementById('insert-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const value = document.getElementById('value').value;
    const contact = new Contact(name, value);
    bst.insert(value, contact);
    alert(`Contacto ${contact.toString()} insertado.`);
});

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const value = document.getElementById('search-value').value;
    const result = bst.search(value);
    const output = result ? result.toString() : 'No encontrado';
    document.getElementById('search-result').innerText = output;
});

document.getElementById('find-min').addEventListener('click', function() {
    const min = bst.findMin();
    alert(`El menor valor es: ${min}`);
});

document.getElementById('find-max').addEventListener('click', function() {
    const max = bst.findMax();
    alert(`El mayor valor es: ${max}`);
});

document.getElementById('print-tree').addEventListener('click', function() {
    const nodes = bst.inorderTraversal();
    document.getElementById('tree-output').innerText = nodes.join('\n');
});
