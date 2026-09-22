import jsbeautifier
import os

beautifier = jsbeautifier.default_options()
beautifier.indent_size = 2

for fn in ['07vv4imtwh47l.js', '2jjzhoczydlnt.js']:
    with open(fn, 'r', encoding='utf-8') as f:
        code = f.read()
    print(f"Beautifying {fn}...")
    try:
        pretty = jsbeautifier.beautify(code, beautifier)
        out_fn = fn.replace('.js', '_beautified.js')
        with open(out_fn, 'w', encoding='utf-8') as f:
            f.write(pretty)
        print(f"Saved {out_fn}")
    except Exception as e:
        print(f"Failed {fn}: {e}")
