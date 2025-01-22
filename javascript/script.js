document.getElementById('myForm').addEventListener('submit', (e)=>{
    e.preventDefault();

    const nameFirst = document.getElementById('firstName').value
    const nameLast = document.getElementById('lastName').value
    const myEmail = document.getElementById('email').value
    const myBio = document.getElementById('bio').value

    // if(nameFirst === '' || nameLast === '' || myEmail === '' || myBio === ''){
    //     alert('Please fill in all fields')
    // }
   document.getElementById('message1').textContent = `${nameFirst}`
   document.getElementById('message2').textContent = `${nameLast}`
   document.getElementById('message3').textContent = `${myBio}`
});

const modal = document.getElementById('modal');
const openModal = document.getElementById('summitButton');
const closeModal = document.getElementById('closeButton');

 openModal.addEventListener('click', ()=>{
    modal.style.display = 'flex';
})

closeModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
})