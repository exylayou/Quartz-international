import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"
edits = []

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
                
                if name in ('replace_file_content', 'multi_replace_file_content') and 'server.ts' in target.lower():
                    edits.append({
                        'step_index': step_index,
                        'tool': name,
                        'created_at': data.get('created_at'),
                        'args': args
                    })
        except Exception as e:
            pass

print(f"Found {len(edits)} edits:")
for e in edits:
    print(f"\n=== STEP {e['step_index']} ({e['tool']}) ===")
    args = e['args']
    if e['tool'] == 'replace_file_content':
        print(f"StartLine: {args.get('StartLine')}, EndLine: {args.get('EndLine')}")
        print(f"TargetContent:\n{args.get('TargetContent')}")
        print(f"ReplacementContent:\n{args.get('ReplacementContent')}")
    elif e['tool'] == 'multi_replace_file_content':
        chunks = args.get('ReplacementChunks', [])
        if isinstance(chunks, str):
            try:
                chunks = json.loads(chunks)
            except:
                pass
        print(f"Multi-replace chunks ({len(chunks)}):")
        for idx, chunk in enumerate(chunks):
            if isinstance(chunk, str):
                try:
                    chunk = json.loads(chunk)
                except:
                    pass
            print(f"  Chunk {idx}: Start={chunk.get('StartLine')}, End={chunk.get('EndLine')}")
            print(f"  Target:\n{chunk.get('TargetContent')}")
            print(f"  Replacement:\n{chunk.get('ReplacementContent')}")
    print("-" * 60)
