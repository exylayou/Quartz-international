import json

with open("/home/oltonexeter/.gemini/antigravity/brain/cf363baa-241a-4a25-9427-a1ca79da2fef/.system_generated/logs/transcript.jsonl", "r") as f:
    for line in f:
        obj = json.loads(line)
        if obj.get("type") == "USER_INPUT":
            print("--- USER INPUT ---")
            print(json.dumps(obj, indent=2))
