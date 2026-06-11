import re

history_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt"
missing_ranges = [
    (321, 347),
    (481, 483),
    (540, 559),
    (601, 618)
]

with open(history_path, 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split("=== Line ")
for block in blocks:
    if not block.strip():
        continue
    lines = block.split("\n")
    header = lines[0].split(" ===")[0]
    line_num = int(header)
    
    # Check if this line number is in any of our missing ranges
    for r in missing_ranges:
        if r[0] <= line_num <= r[1]:
            print(f"=== Line {line_num} ===")
            # print the first few historical versions (newest first)
            for l in lines[1:5]:
                if l.strip():
                    print(l)
            print()
