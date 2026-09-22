with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('SiteChrome')
if idx != -1:
    print(text[max(0, idx-10000):max(0, idx-4000)])
