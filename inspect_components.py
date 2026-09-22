with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

names = ['StoreNotice', 'CarouselSection', 'CategoryCarousel', 'HeroCarousel', 'ComboCard', 'DiscountBadge', 'ProductCard']
for name in names:
    needle = f'"{name}",'
    idx = text.find(needle)
    if idx != -1:
        print(f'=== {name} ===')
        print(text[idx:idx+1500])
        print('\n' + '='*50 + '\n')
