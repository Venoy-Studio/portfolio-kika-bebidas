with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('getStoreStatus')
if idx != -1:
    print(text[idx-50:idx+2500])
