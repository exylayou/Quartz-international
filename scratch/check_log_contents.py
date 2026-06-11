import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            if step_index in (4980, 4982):
                content = data.get('content', '')
                print(f"Step {step_index}: content length={len(content)}")
                # Check for truncated marker
                has_truncated = "truncated" in content.lower()
                print(f"  Has 'truncated' in content: {has_truncated}")
                lines = content.split('\n')
                print(f"  First 5 lines:\n" + "\n".join(lines[:5]))
                print(f"  Last 5 lines:\n" + "\n".join(lines[-5:]))
                print("-" * 50)
        except Exception as e:
            pass
