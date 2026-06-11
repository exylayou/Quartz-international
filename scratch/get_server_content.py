import json

log_path = "/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/logs/transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            step_index = data.get('step_index')
            if step_index in (4980, 4982):
                print(f"--- STEP {step_index} ---")
                content = data.get('content', '')
                print(content)
        except Exception as e:
            pass
