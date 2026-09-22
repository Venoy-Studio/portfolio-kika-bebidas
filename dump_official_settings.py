with open('08rsj-bj1rf62.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('storeNotice')
print(text[idx-500:idx+1500])
