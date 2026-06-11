import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
views = []

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            tool_calls = data.get('tool_calls', [])
            
            for tc in tool_calls:
                name = tc.get('name')
                args = tc.get('args', {})
                target = args.get('AbsolutePath', '')
                
                if name == 'view_file' and 'server.ts' in target.lower():
                    views.append({
                        'step_index': step_index,
                        'created_at': data.get('created_at'),
                        'start': args.get('StartLine'),
                        'end': args.get('EndLine')
                    })
        except Exception as e:
            pass

print(f"Found {len(views)} view_file calls for server.ts:")
for v in views:
    print(v)
