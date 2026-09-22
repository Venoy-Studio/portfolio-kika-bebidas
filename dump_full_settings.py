with open('08rsj-bj1rf62.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('storeNotice')
# print from 2000 chars before storeNotice to 500 chars after
print(text[max(0, idx-2000):idx+500])
