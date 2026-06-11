import zipfile
import os

zip_path = "/home/oltonexeter/Antigravity-x64/quartz-international.zip"
target_file = "server.ts"

if os.path.exists(zip_path):
    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
        namelist = zip_ref.namelist()
        matching = [name for name in namelist if name.endswith(target_file)]
        if matching:
            print(f"Found matches: {matching}")
            # Extract the first matching file to workspace root
            zip_ref.extract(matching[0], path="/home/oltonexeter/Antigravity-x64/quartz-international/")
            print(f"Extracted {matching[0]} successfully")
        else:
            print("No matching server.ts in zip file")
else:
    print(f"Zip file not found at {zip_path}")
