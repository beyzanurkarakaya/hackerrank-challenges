# Enter your code here. Read input from STDIN. Print output to STDOUT
import calendar

month, day, year = map(int, input().split())

gun_indeksi = calendar.weekday(year, month, day)

gun_adi = calendar.day_name[gun_indeksi].upper()

print(gun_adi)

# import calendar
# m, d, y = map(int, input().split())
# print(list(calendar.day_name)[calendar.weekday(y, m, d)].upper())