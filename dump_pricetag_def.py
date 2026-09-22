with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"PriceTag", 0')
if idx != -1:
    print(text[max(0, idx-1500):idx+200])
