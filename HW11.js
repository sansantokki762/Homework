const openbtn = document.getElementById('open');
const tokki_conntainer = document.querySelector('.tokki_conntainer');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click' , () => {
    tokki_conntainer.classList.add('show');
})

closebtn.addEventListener('click' , () => {
    tokki_conntainer.classList.remove('show');
})