with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('function N({')
if idx != -1:
    print(text[idx:idx+4000])
