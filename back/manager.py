import random

letters_low = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
letters_high = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers =   ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

types = [letters_low, letters_high, numbers]

def create_password(password_len):
    password = ''
    for _ in range(password_len):
        type_symb = random.choice(types)
        symbol = random.choice(type_symb)
        password += symbol
    print(password)
    return password

def save_password(site_name):
    pass
