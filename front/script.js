async function generatePassword() {
    let length = document.querySelector('#passwordLength').value;
    let password = await eel.generate_password(length)();
    document.querySelector('#password').value = password;
}

async function saveAccount() {
    let url = document.querySelector('#url').value;
    let login = document.querySelector('#login').value;
    let password = document.querySelector('#password').value;
    let info = document.querySelector('#info').value;
    let message = await eel.save_account(url, login, password, info)();
    showPopup(message)
}

async function loadAccountInfo() {
    let url = document.querySelector('#url').value;
    let message = await eel.get_account(url)();
    showPopup(message)
}

function showPopup(message) {
    document.getElementById('popup-text').textContent = message;
    document.getElementById('popup').classList.remove('hidden');
}

document.getElementById('popup-close').addEventListener('click', () => {
    document.getElementById('popup').classList.add('hidden');
    document.querySelector('#url').value = '';
    document.querySelector('#login').value = '';
    document.querySelector('#password').value = '';
    document.querySelector('#info').value = ''
    document.querySelector('#passwordLength').value = 12;
})



const generateButton = document.querySelector('#generateButton');
const saveButton = document.querySelector('#saveButton');
const loadButton = document.querySelector('#loadButton');

generateButton.addEventListener('click', generatePassword);
saveButton.addEventListener('click', saveAccount);
loadButton.addEventListener('click', loadAccountInfo);
