async function generatePassword() {
    let password = await eel.generate_password()()
    document.getElementById('password_input').value = password
}