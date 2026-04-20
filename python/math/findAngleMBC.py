# Enter your code here. Read input from STDIN. Print output to STDOUT
import math

ab = int(input())
bc = int(input())

# In a right triangle, the median to the hypotenuse (BM) is equal to MC
# Therefore, triangle MBC is isosceles and angle MBC = angle MCB
# Angle MCB can be found using the arctangent of (AB/BC)
angle_radians = math.atan2(ab, bc)

# Convert radians to degrees and round to the nearest integer
angle_degrees = round(math.degrees(angle_radians))

# Print with the degree symbol (ASCII 176)
print(f"{angle_degrees}{chr(176)}")
