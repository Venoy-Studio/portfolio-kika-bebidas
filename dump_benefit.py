with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('99500')
if idx != -1:
    print(text[idx:idx+2500])
