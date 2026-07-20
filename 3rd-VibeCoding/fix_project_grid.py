import sys
import re
sys.stdout.reconfigure(encoding='utf-8')

# Read reconstructed_index.html
with open('reconstructed_index.html', 'r', encoding='utf-8') as f:
    rec_content = f.read()

# Extract the grid block from reconstructed
match_rec = re.search(r'(<div class="curriculum-grid" style="margin-bottom: 30px;">.*?</div>\n                </div>)', rec_content, re.DOTALL)
if not match_rec:
    print('Failed to find block in reconstructed')
    sys.exit(1)
new_block = match_rec.group(1)

# Read index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

# Replace in index.html
match_idx = re.search(r'(<div class="curriculum-grid" style="margin-bottom: 30px;">.*?</div>\n                </div>)', idx_content, re.DOTALL)
if not match_idx:
    print('Failed to find block in index.html')
    sys.exit(1)
old_block = match_idx.group(1)

idx_content = idx_content.replace(old_block, new_block)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(idx_content)
print('Successfully replaced project grid.')
