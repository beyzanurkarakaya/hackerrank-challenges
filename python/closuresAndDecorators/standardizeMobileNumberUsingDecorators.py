def wrapper(f):
    def fun(l):
        # complete the function
        # Format each number: extract the last 10 digits and prepend '+91 '
        decorated_list = []
        for num in l:
            clean_num = "+91 " + num[-10:-5] + " " + num[-5:]
            decorated_list.append(clean_num)
        
        # Pass the newly formatted list to the original sorting function
        return f(decorated_list)
    return fun

@wrapper
def sort_phone(l):
    print(*sorted(l), sep='\n')

if __name__ == '__main__':
    l = [input() for _ in range(int(input()))]
    sort_phone(l) 


