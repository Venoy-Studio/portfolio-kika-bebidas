import glob

for fn in glob.glob('*.js'):
    with open(fn, 'r', encoding='utf-8') as f:
        text = f.read()
    idx = text.find('storeNotice')
    if idx != -1:
        print(f"Found storeNotice in {fn} at {idx}:")
        print(text[max(0, idx-100):min(len(text), idx+500)])
