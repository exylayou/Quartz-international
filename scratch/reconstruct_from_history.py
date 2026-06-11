import re

history_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt"

with open(history_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

current_line_num = None
current_line_entries = []

all_line_versions = {} # line_num -> list of versions

for line in lines:
    match = re.match(r"^=== Line (\d+) ===$", line.strip())
    if match:
        if current_line_num is not None:
            all_line_versions[current_line_num] = current_line_entries
        current_line_num = int(match.group(1))
        current_line_entries = []
    else:
        if current_line_num is not None and line.strip():
            # Match "Step X (timestamp): content"
            step_match = re.match(r"^\s*Step (\d+) \(([^)]+)\):\s?(.*)$", line)
            if step_match:
                step = int(step_match.group(1))
                date = step_match.group(2)
                content = step_match.group(3)
                current_line_entries.append((step, date, content))

if current_line_num is not None:
    all_line_versions[current_line_num] = current_line_entries

# Let's print out the newest version of lines between 1 and 700
# if the line is missing or has a step index, let's look at it
print(f"Total lines in database: {len(all_line_versions)}")

# Let's write a reconstructed file using the absolute newest step index version of each line we've ever seen
reconstructed = {}
for line_num, entries in all_line_versions.items():
    if entries:
        # Sort by step index descending
        entries.sort(key=lambda x: x[0], reverse=True)
        reconstructed[line_num] = entries[0][2]

max_line = max(reconstructed.keys()) if reconstructed else 0
print(f"Max line number: {max_line}")

with open("/home/oltonexeter/Antigravity-x64/quartz-international/scratch/reconstructed_from_history.ts", "w", encoding="utf-8") as f:
    for i in range(1, max_line + 1):
        if i in reconstructed:
            f.write(reconstructed[i] + "\n")
        else:
            f.write(f"// MISSING LINE {i}\n")

print("Done writing scratch/reconstructed_from_history.ts")
