import re

with open("/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt", "r") as f:
    content = f.read()

keys = [
    'leads/:id',
    'quotes/:id',
    '/quote',
    'messages',
    'customers'
]

for key in keys:
    print(f"=== Search for: {key} ===")
    for block in content.split("=== Line "):
        if not block.strip():
            continue
        lines = block.split("\n")
        line_num = lines[0].split(" ===")[0]
        block_text = "\n".join(lines[1:])
        if key.lower() in block_text.lower():
            print(f"Line {line_num}:")
            print(lines[1].strip())
    print("-" * 50)
