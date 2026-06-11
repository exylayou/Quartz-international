import os
import json

brain_dir = "/home/oltonexeter/.gemini/antigravity/brain/"

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
                            
                            if name == 'write_to_file' and 'server.ts' in target.lower():
                                content = args.get('CodeContent', '')
                                is_truncated = "[truncated]" in str(tc) or len(content) == 0
                                print(f"Found write_to_file in {log_path} step {step_index}: content length={len(content)}, is_truncated={is_truncated}")
                    except Exception as e:
                        pass
