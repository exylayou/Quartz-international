import json
import re

transcript_path = '/home/oltonexeter/.gemini/antigravity/brain/569e3baa-bada-4a93-96e6-2bcfe1f79da0/.system_generated/logs/transcript.jsonl'

smtp_pattern = re.compile(r'SMTP_[A-Z]+', re.IGNORECASE)

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            content = str(data.get('content', ''))
            tool_calls = str(data.get('tool_calls', ''))
            
            if 'SMTP_' in content or 'SMTP_' in tool_calls:
                step_index = data.get('step_index')
                source = data.get('source')
                print(f"--- MATCH AT STEP {step_index} ({source}) ---")
                
                # Find all lines containing SMTP in content
                for l in content.split('\n'):
                    if 'SMTP' in l or 'smtp' in l:
                        print(l[:200])
        except Exception as e:
            pass
