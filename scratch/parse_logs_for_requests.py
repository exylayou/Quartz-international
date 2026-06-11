with open("/home/oltonexeter/.gemini/antigravity/brain/ea4590c8-ba3b-4483-9138-41b85531eda6/.system_generated/tasks/task-4550.log", "r") as f:
    lines = f.readlines()

for line in lines:
    if "api" in line.lower() or "post" in line.lower() or "get" in line.lower() or "leads" in line.lower():
        if line.strip():
            print(line.strip())
