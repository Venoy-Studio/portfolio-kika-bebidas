with open('07vv4imtwh47l_beautified.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's search from module 32864 start
idx = text.find('32864,')
# Find where module 32864 starts
mod_idx = text.rfind('"use strict";', 0, idx)
print(text[mod_idx:idx+1000])
