let amigos = [
    {name: 'Alvaro', email: 'a@a.es' },
    {name: 'Laura', email: 'l@l.es' },
    {name: 'Ricardo', email: 'r@r.es' },
    {name: 'Juan', email: 'j@j.es' },
    {name: 'Petra', email: 'p@p.es' },
];

window.localStorage.setItem('palabra_almacenada', 'Valor de la palabra');
window.localStorage.setItem('lista_amigos', JSON.stringify(amigos));