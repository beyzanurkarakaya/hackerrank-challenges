# Enter your code here. Read input from STDIN. Print output to STDOUT

# Read the number of test cases
for _ in range(int(input())):
    uid = input().strip()
    
    # 1. Exactly 10 characters
    # 2. Only alphanumeric characters (a-z, A-Z, 0-9)
    # 3. No repeating characters
    # 4. At least 2 uppercase characters
    # 5. At least 3 digits
    if (len(uid) == 10 and
        uid.isalnum() and
        len(set(uid)) == 10 and
        sum(1 for c in uid if c.isupper()) >= 2 and
        sum(1 for c in uid if c.isdigit()) >= 3):
        print("Valid")
    else:
        print("Invalid")