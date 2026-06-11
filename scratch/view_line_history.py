import json
import re

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
history = {} # line_number -> [(step_index, created_at, content)]

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            type_name = data.get('type')
            content = data.get('content', '')
            
            if type_name == 'VIEW_FILE' and 'File Path: `file:///home/oltonexeter/Antigravity-x64/quartz-international/server.ts`' in content:
                created_at = data.get('created_at', '')
                for file_line in content.split('\n'):
                    match = re.match(r"^(\d+):\s?(.*)$", file_line.strip())
                    if match:
                        line_num = int(match.group(1))
                        line_content = match.group(2)
                        
                        if line_num not in history:
                            history[line_num] = []
                        history[line_num].append((step_index, created_at, line_content))
        except Exception as e:
            pass

output_path = "/home/oltonexeter/Antigravity-x64/quartz-international/scratch/server_line_history.txt"
with open(output_path, 'w', encoding='utf-8') as f:
    for line_num in sorted(history.keys()):
        f.write(f"=== Line {line_num} ===\n")
        # Sort by step index descending (newest first)
        for step, date, content in sorted(history[line_num], key=lambda x: x[0], reverse=True):
            f.write(f"  Step {step} ({date}): {content}\n")
        f.write("\n")

print(f"Wrote line history to {output_path}")
