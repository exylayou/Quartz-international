import json
import re

transcript_path = '/home/oltonexeter/.gemini/antigravity/brain/569e3baa-bada-4a93-96e6-2bcfe1f79da0/.system_generated/logs/transcript.jsonl'

terms = ['gmail', 'smtp', 'port', 'password', 'user', 'pass', 'auth', 'transport', 'mail']

with open(transcript_path, 'r') as f:
    for line in f:
        try:
            data = json.loads(line)
            content = str(data.get('content', ''))
            
            # Check if any term is in content
            found_terms = [t for t in terms if t in content.lower()]
            if found_terms:
                step_index = data.get('step_index')
                source = data.get('source')
                
                # Check for lines with credentials
                for l in content.split('\n'):
                    l_lower = l.lower()
                    if ('smtp' in l_lower or 'port' in l_lower or 'pass' in l_lower or 'gmail' in l_lower) and ('key' in l_lower or '=' in l_lower or ':' in l_lower):
                        print(f"[{step_index} - {source}] {l[:200]}")
        except Exception as e:
            pass
