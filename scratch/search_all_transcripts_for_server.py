import os
import json
import re

brain_dir = "/home/oltonexeter/.gemini/antigravity/brain/"
all_lines = {} # line_number -> (step_index, content, log_file)

for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file == "transcript.jsonl":
            log_path = os.path.join(root, file)
            with open(log_path, 'r', encoding='utf-8') as f:
                for line in f:
                    try:
                        data = json.loads(line)
                        step_index = data.get('step_index')
                        type_name = data.get('type')
                        content = data.get('content', '')
                        
                        # Check both VIEW_FILE and replace_file_content/write_to_file
                        # If VIEW_FILE of server.ts
                        if type_name == 'VIEW_FILE' and 'server.ts' in content:
                            for file_line in content.split('\n'):
                                match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                                if match:
                                    line_num = int(match.group(1))
                                    line_content = match.group(2)
                                    # We keep the one with the highest step index we find or just collect all
                                    if line_num not in all_lines or step_index > all_lines[line_num][0]:
                                        all_lines[line_num] = (step_index, line_content, log_path)
                    except Exception as e:
                        pass

print(f"Total unique lines found across all transcripts: {len(all_lines)}")
sorted_lines = sorted(all_lines.keys())
if sorted_lines:
    print("Ranges populated:")
    start = sorted_lines[0]
    prev = sorted_lines[0]
    for l in sorted_lines[1:]:
        if l != prev + 1:
            print(f"  {start}-{prev}")
            start = l
        prev = l
    print(f"  {start}-{prev}")

# Write the fully reconstructed server.ts using the global database
out_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/reconstructed_server_global.ts"
with open(out_path, 'w', encoding='utf-8') as f:
    max_line = max(sorted_lines) if sorted_lines else 0
    for i in range(1, max_line + 1):
        if i in all_lines:
            f.write(all_lines[i][1] + "\n")
        else:
            f.write(f"// MISSING LINE {i}\n")
print(f"Wrote to {out_path}")
