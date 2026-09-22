import glob, re

for fn in glob.glob('*beautified.js'):
    with open(fn, 'r', encoding='utf-8') as f:
        text = f.read()
    idx = 0
    while True:
        idx = text.find('25412', idx)
        if idx == -1: break
        # print snippet around it
        print(f"In {fn} at {idx}:")
        print(text[max(0, idx-100):min(len(text), idx+300)])
        print('-'*40)
        idx += 5
