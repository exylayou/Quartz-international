import os
import json

brain_dir = "/home/oltonexeter/.gemini/antigravity/brain/"
writes = []

for root, dirs, files in os.walk(brain_dir):
    for file in files:
        if file == "transcript.jsonl":
            log_path = os.path.join(root, file)
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
                                is_truncated = "[truncated]" in str(tc) or len(content) == 0
                                writes.append({
                                    'log_path': log_path,
                                    'step_index': step_index,
                                    'tool': name,
                                    'created_at': data.get('created_at'),
                                    'target': target,
                                    'content_len': len(content),
                                    'is_truncated': is_truncated
                                })
                    except Exception as e:
                        pass

print(f"Found {len(writes)} total write operations:")
for w in sorted(writes, key=lambda x: (x['log_path'], x['step_index'])):
    # print folder name of log_path and step_index
    folder = os.path.basename(os.path.dirname(os.path.dirname(os.path.dirname(w['log_path']))))
    print(f"Folder: {folder}, Step: {w['step_index']}, Tool: {w['tool']}, len: {w['content_len']}, truncated: {w['is_truncated']}")
