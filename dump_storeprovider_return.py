with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('StoreProvider", 0')
if idx != -1:
    print(text[idx+2000:idx+4500])
