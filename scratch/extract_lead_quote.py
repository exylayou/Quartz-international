import re

history_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt"

with open(history_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Let's find all occurrences of lines that contain "/api/leads/:id/quote"
for block in content.split("=== Line "):
    if not block.strip():
        continue
    lines = block.split("\n")
    header = lines[0].split(" ===")[0]
    line_num = int(header)
    block_text = "\n".join(lines[1:])
    if "/api/leads/:id/quote" in block_text or "/api/quotes/:id" in block_text:
        print(f"=== Line {line_num} ===")
        # Print top 3 newest versions
        count = 0
        for l in lines[1:]:
            if l.strip() and ("Step 2111" in l or "Step 2118" in l or "Step 4980" in l or "Step 4365" in l):
                print(l)
                count += 1
                if count >= 3:
                    break
        print()
