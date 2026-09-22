with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('"HOME_SECTION_LABEL"')
if idx != -1:
    print(text[idx-500:idx+2500])
