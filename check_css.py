import urllib.request, re

resp = urllib.request.urlopen('http://localhost:3001/')
html = resp.read().decode('utf-8')
css_files = re.findall(r'href="(/_next/static/css/[^"]+\.css)"', html)
print('CSS files:', css_files)
for css in css_files:
    content = urllib.request.urlopen('http://localhost:3001' + css).read().decode('utf-8')
    for needle in ['__variable_f367f3', '__variable_7d3aca', '--font-montserrat', '--font-inter', 'Montserrat', 'Inter']:
        if needle in content:
            print(f'{needle} found in {css}')
