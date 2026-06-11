import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
writes = []

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            tool_calls = data.get('tool_calls', [])
            
            for tc in tool_calls:
                name = tc.get('name')
                args = tc.get('args', {})
                target = args.get('TargetFile', '')
                
                if name in ('write_to_file', 'replace_file_content', 'multi_replace_file_content') and 'server.ts' in target.lower():
                    # Check if contents are in args
                    content = args.get('CodeContent') or args.get('ReplacementContent') or ""
                    # Check for truncation in log
                    is_truncated = "[truncated]" in str(tc) or len(content) == 0
                    writes.append({
                        'step_index': step_index,
                        'tool': name,
                        'created_at': data.get('created_at'),
                        'target': target,
                        'content_len': len(content),
                        'is_truncated': is_truncated
                    })
        except Exception as e:
            pass

print(f"Found {len(writes)} write operations:")
for w in writes:
    print(w)
