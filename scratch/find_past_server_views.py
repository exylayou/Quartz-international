import os
import json
import re

brain_dir = "/home/oltonexeter/.gemini/antigravity/brain/"
server_lines = {}

# Recursively search for transcript.jsonl files
for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file == "transcript.jsonl":
            log_path = os.path.join(root, file)
            print(f"Searching in {log_path}...")
            
            with open(log_path, 'r', encoding='utf-8') as f:
                for line in f:
                    try:
                        data = json.loads(line)
                        step_index = data.get('step_index')
                        content = data.get('content', '')
                        
                        # Check if this content is from a view_file of server.ts
                        if "server.ts" in str(data.get('tool_calls', {})) or "server.ts" in content:
                            for file_line in content.split('\n'):
                                match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                                if match:
                                    line_num = int(match.group(1))
                                    line_content = match.group(2)
                                    # Store line if it's not already stored or if we want to build a profile
                                    if line_num not in server_lines:
                                        server_lines[line_num] = []
                                    server_lines[line_num].append((log_path, step_index, line_content))
                    except Exception as e:
                        pass

print(f"Reconstructed line numbers count: {len(server_lines)}")
# Show ranges of line numbers found
all_lines = sorted(list(server_lines.keys()))
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
