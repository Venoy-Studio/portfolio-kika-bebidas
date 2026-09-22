with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('useCarousel')
if idx != -1:
    print(text[max(0, idx-500):idx+1500])
else:
    # search in 2jjzhoczydlnt_beautified.js
    with open('2jjzhoczydlnt_beautified.js', 'r', encoding='utf-8') as f2:
        text2 = f2.read()
    idx2 = text2.find('useCarousel')
    if idx2 != -1:
        print("In 2jjzhoczydlnt_beautified.js:")
        print(text2[max(0, idx2-500):idx2+1500])
    else:
        print("useCarousel not found in both")
