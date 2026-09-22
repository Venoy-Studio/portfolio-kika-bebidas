import glob, re

for fn in glob.glob('*.js'):
    with open(fn, 'r', encoding='utf-8') as f:
        text = f.read()
    matches = re.finditer(r'(?:^|[,\s])25412\s*:\s*(?:\(e|e\s*=>)', text)
    for m in matches:
        print(f"Module 25412 defined in {fn} at {m.start()}")
        print(text[m.start():m.start()+1500])
