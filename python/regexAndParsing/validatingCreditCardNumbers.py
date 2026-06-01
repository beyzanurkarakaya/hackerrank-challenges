# Enter your code here. Read input from STDIN. Print output to STDOUT
import re

def validate_credit_card(card):
    # 1. Check overall structure: must start with 4, 5, or 6
    # 2. Exactly 16 digits long total
    # 3. Consists only of digits 0-9 (may have groups of 4 separated by '-')
    # 4. No other separators allowed
    if not re.match(r"^[456]\d{3}(-?\d{4}){3}$", card):
        return "Invalid"
    
    # Remove hyphens to test consecutive repeats easily
    clean_card = card.replace("-", "")
    
    # 5. Check for 4 or more consecutive repeated digits
    if re.search(r"(\d)\1{3,}", clean_card):
        return "Invalid"
        
    return "Valid"

# Read number of test cases and process
for _ in range(int(input())):
    print(validate_credit_card(input().strip()))