# Enter your code here. Read input from STDIN. Print output to STDOUT
t = int(input())

for _ in range(t):
    try:   
        a, b = input().split()
        print(int(a) // int(b))
        
    except ZeroDivisionError:
        print("Error Code: integer division or modulo by zero")
        
    except ValueError as e:
        print("Error Code:", e)
