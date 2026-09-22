with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('BannerSlide')
if idx != -1:
    print(text[idx+1500:idx+3500])
