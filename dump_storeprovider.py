with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('StoreProvider')
if idx != -1:
    print("Found StoreProvider at", idx)
    print(text[idx-50:idx+3500])
