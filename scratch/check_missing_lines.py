import json
import re

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
server_lines = set()

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            if step_index in (4980, 4982):
                content = data.get('content', '')
                for file_line in content.split('\n'):
                    match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                    if match:
                        server_lines.add(int(match.group(1)))
        except Exception as e:
            pass

all_lines = sorted(list(server_lines))
print(f"Total lines found: {len(all_lines)}")
if all_lines:
    print(f"Ranges of lines found:")
    start = all_lines[0]
    prev = all_lines[0]
    for l in all_lines[1:]:
        if l != prev + 1:
            print(f"  {start}-{prev}")
            start = l
        prev = l
    print(f"  {start}-{prev}")
