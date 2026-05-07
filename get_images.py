from duckduckgo_search import DDGS
import urllib.request
import os

queries = {
    "Miami Vena": "Silestone Miami Vena slab",
    "Silestone Pietra": "Silestone Pietra slab",
    "Silestone Yukon": "Silestone Yukon slab",
    "Miami White": "Silestone Miami White slab",
    "Halcyon": "Silestone Halcyon slab"
}

os.makedirs("src/assets/images", exist_ok=True)
results_map = {}

with DDGS() as ddgs:
    for name, query in queries.items():
        results = list(ddgs.images(query, max_results=1))
        if results:
            url = results[0]['image']
            filename = f"src/assets/images/silestone-{name.lower().replace(' ', '-')}.jpg"
            try:
                urllib.request.urlretrieve(url, filename)
                print(f"Downloaded {name}")
                results_map[name] = filename
            except Exception as e:
                print(f"Failed to download {name}: {e}")
        else:
            print(f"No results for {name}")
