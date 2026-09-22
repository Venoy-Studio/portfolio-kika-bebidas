with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('useCarousel')
if idx != -1:
    print("Found useCarousel in 2jjzhoczydlnt_beautified.js at", idx)
    print(text[idx-200:idx+1500])
else:
    print("useCarousel not found in 2jjzhoczydlnt_beautified.js")
