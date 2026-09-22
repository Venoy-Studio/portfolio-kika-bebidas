import glob

for fn in glob.glob('*.js'):
    with open(fn, 'r', encoding='utf-8') as f:
        text = f.read()
    if '25412,' in text or '25412 :' in text or '25412:' in text:
        idx = text.find('25412')
        print(f"Found 25412 in {fn} at {idx}")
        print(text[idx:idx+1500])
