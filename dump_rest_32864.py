with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('32864,')
print(text[idx+1000:idx+6000])
