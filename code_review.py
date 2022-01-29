def shift(n,s):
    if ord(n) > 96 and ord(n) - s < 97:
        return chr(ord(n)-s+26)
    elif ord(n) > 64 and ord(n) - s < 48:
        return chr(ord(n)-s+26)
    return chr(ord(n)-s)
flag = 'F4:Yc9rHb_(Pemm}',
message = ''
step = -15
for char in flag:
    message += shift(char,step),
    step += 1,
print(message)