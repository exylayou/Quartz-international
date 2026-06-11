import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            if step_index is None or step_index < 4983 or step_index > 5007:
                continue
            
            tool_calls = data.get('tool_calls', [])
            if tool_calls:
                print(f"Step {step_index}: type={data.get('type')}")
                for tc in tool_calls:
                    print(f"  Tool: {tc.get('name')}")
                    args = tc.get('args', {})
                    args_print = {k: v for k, v in args.items() if k not in ('CodeContent', 'ReplacementContent')}
                    print(f"    Args: {args_print}")
                print("-" * 50)
            
            if data.get('type') in ('RUN_COMMAND', 'ERROR_MESSAGE'):
                content = str(data.get('content', ''))
                print(f"Step {step_index} Content: {content[:300]}")
                print("=" * 50)
        except Exception as e:
            pass
