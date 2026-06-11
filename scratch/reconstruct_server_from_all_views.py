import json
import re

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
line_db = {} # line_number -> (step_index, content)

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            type_name = data.get('type')
            content = data.get('content', '')
            
            # Check if this step is a VIEW_FILE output and contains server.ts file path
            if type_name == 'VIEW_FILE' and 'server.ts' in content:
                for file_line in content.split('\n'):
                    match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                    if match:
                        line_num = int(match.group(1))
                        line_content = match.group(2)
                        
                        # Store or update the line if it is from a newer step
                        if line_num not in line_db or step_index > line_db[line_num][0]:
                            line_db[line_num] = (step_index, line_content)
        except Exception as e:
            pass

all_lines = sorted(list(line_db.keys()))
print(f"Total unique lines reconstructed: {len(line_db)}")
if all_lines:
    print(f"Ranges of lines populated:")
    start = all_lines[0]
    prev = all_lines[0]
    for l in all_lines[1:]:
        if l != prev + 1:
            print(f"  {start}-{prev}")
            start = l
        prev = l
    print(f"  {start}-{prev}")

    # Write the reconstructed file
    output_path = "/home/oltonexeter/Antigravity-x64/quartz-international/server.ts"
    with open(output_path, 'w', encoding='utf-8') as f:
        max_line = max(all_lines)
        for i in range(1, max_line + 1):
            if i in line_db:
                f.write(line_db[i][1] + "\n")
            else:
                f.write(f"// MISSING LINE {i}\n")
    print(f"Wrote reconstructed file to {output_path}")
