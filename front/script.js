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
    await eel.save_account(url, login, password, info)()
}

async function loadAccount() {
    let url = document.querySelector('#url').value;
    let data = await eel.get_account(url);
}

const generateButton = document.querySelector('#generateButton');
const saveButton = document.querySelector('#saveButton');
const loadButton = document.querySelector('#loadButton');

generateButton.addEventListener('click', generatePassword);
saveButton.addEventListener('click', saveAccount);
loadButton.addEventListener('click', loadAccount);
