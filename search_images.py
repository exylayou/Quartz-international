import urllib.request
import json
import re

queries = [
    "Miami Vena Silestone slab",
    "Silestone Pietra slab",
    "Silestone Yukon slab",
    "Miami White Silestone slab",
    "Halcyon Silestone slab"
]

for query in queries:
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query + ' filetype:jpg')}"
    req = urllib.request.Request(
        url, 
        data=None, 
        headers={
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    )
    try:
        response = urllib.request.urlopen(req)
        html = response.read().decode('utf-8')
        
        # very basic extraction of thumbnail links
        links = re.findall(r'src="//(external-content\.duckduckgo\.com/iu/\?u=[^"]+)"', html)
        if links:
            # Decode the first url
            real_url = urllib.parse.unquote(links[0].split('u=')[1].split('&')[0])
            print(f"{query}: {real_url}")
        else:
            print(f"{query}: Not found")
    except Exception as e:
        print(f"{query}: Error {e}")
