import json
import re

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
server_lines = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            if step_index in (4980, 4982):
                content = data.get('content', '')
                for file_line in content.split('\n'):
                    # Match line number pattern, e.g. "12: import path from 'path';"
                    match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                    if match:
                        line_num = int(match.group(1))
                        line_content = match.group(2)
                        
                        # In case group(2) has escaped characters or needs handling,
                        # but standard string matches are fine.
                        server_lines[line_num] = line_content
        except Exception as e:
            pass

# Verify we got lines
if not server_lines:
    print("Error: No lines reconstructed!")
else:
    max_line = max(server_lines.keys())
    print(f"Reconstructed {len(server_lines)} lines up to line {max_line}")
    
    # Write to server.ts
    output_path = "/home/oltonexeter/Antigravity-x64/quartz-international/server.ts"
    with open(output_path, 'w', encoding='utf-8') as f:
        for i in range(1, max_line + 1):
            line_text = server_lines.get(i, "")
            f.write(line_text + "\n")
    print(f"Successfully wrote {output_path}")
