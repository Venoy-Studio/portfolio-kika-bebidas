with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('SiteChrome')
if idx != -1:
    print("Found SiteChrome at", idx)
    print(text[idx-50:idx+4500])
