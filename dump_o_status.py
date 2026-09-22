with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('getStoreStatus')
print(text[max(0, idx-2000):idx])
