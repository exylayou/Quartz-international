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
                        content = data.get('content', '')
                        if 'Selected Extras' in content and 'Total Estimated Range' in content:
                            print(f"Found match in {log_path} step {data.get('step_index')}:")
                            lines = content.split('\n')
                            for idx, l in enumerate(lines):
                                if 'Selected Extras' in l:
                                    # Print lines around it
                                    start_idx = max(0, idx - 2)
                                    end_idx = min(len(lines), idx + 20)
                                    for j in range(start_idx, end_idx):
                                        print(lines[j])
                                    print("=" * 60)
                                    break
                    except Exception as e:
                        pass
