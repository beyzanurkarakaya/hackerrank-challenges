# Enter your code here. Read input from STDIN. Print output to STDOUT
set_A = set(map(int, input().split()))
n = int(input())
is_strict = True
for i in range(n):
    set_test = set(map(int, input().split()))
    
    if not set_A > set_test:
        is_strict = False
        break
        
print(is_strict)
