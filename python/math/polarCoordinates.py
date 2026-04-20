# Enter your code here. Read input from STDIN. Print output to STDOUT
import cmath

z = complex(input())

# Option 1: Using cmath.polar()
# r, phi = cmath.polar(z)
# print(r)
# print(phi)

# Option 2: Using individual functions
print(abs(z))          # Modulus r
print(cmath.phase(z))  # Phase angle phi
