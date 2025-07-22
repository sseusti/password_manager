import random
import eel
import json

letters_low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
letters_high = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers =   ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

types = [letters_low, letters_high, numbers]

@eel.expose
def generate_password(password_len=12):
    password = ''
    for _ in range(password_len):
        type_symb = random.choice(types)
        symbol = random.choice(type_symb)
        password += symbol
    print(password)
    return password


def save_account(url, login, password):
    new_account = {
        'login': login,
        'password': password
    }
    with open('./passwords.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    data[url] = new_account
    
    with open('./passwords.json', 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4)
        
save_account('qwe', 'aaa', '123')