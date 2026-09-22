with open('08rsj-bj1rf62.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('storeNotice')
# find where T = { starts
t_idx = text.rfind('{', 0, idx-400)
print(text[t_idx:idx+800])
