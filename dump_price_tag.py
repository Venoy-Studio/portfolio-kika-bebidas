with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('AvailabilityPill')
if idx != -1:
    print(text[max(0, idx-2000):idx+500])
