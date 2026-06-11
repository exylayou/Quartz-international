import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            content_str = str(data.get('content', ''))
            tool_calls = data.get('tool_calls', [])
            step_index = data.get('step_index')
            created_at = data.get('created_at')
            
            # Look for mentions of server.ts
            if 'server.ts' in content_str.lower() or any('server.ts' in str(t).lower() for t in tool_calls):
                # Filter out search queries from later steps to keep output clean
                if step_index >= 5180:
                    continue
                print(f"Step {step_index} ({created_at}): type={data.get('type')}")
                if tool_calls:
                    print(f"  Tool calls: {tool_calls}")
                if len(content_str) > 200:
                    print(f"  Content (truncated): {content_str[:200]}...")
                else:
                    print(f"  Content: {content_str}")
                print("-" * 50)
        except Exception as e:
            pass
