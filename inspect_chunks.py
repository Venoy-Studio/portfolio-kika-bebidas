import re

for fn in ['07vv4imtwh47l.js', '08rsj-bj1rf62.js', '2jjzhoczydlnt.js']:
    try:
        with open(fn, 'r', encoding='utf-8') as f:
            text = f.read()
        m = re.findall(r'e\.s\(\["([^"]+)"', text)
        print(fn, m)
    except Exception as ex:
        print(fn, ex)
