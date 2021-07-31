# In here im creating a gridTraveler method, one with an exponentioal time complexity
# and the other is using memoization for dynamic programming

def basicGridTraveler(row, column):
    # Base case
    if row == 1 and column == 1:
        return 1
    if row == 0 or column == 0:
        return 0
    # Recurrsive
    return (basicGridTraveler(row-1,column) + basicGridTraveler(row,column-1))


print("--------Basic Grid Traveler-------------")
print(basicGridTraveler(1, 0))
print(basicGridTraveler(0, 1))
print(basicGridTraveler(1, 1))
print(basicGridTraveler(2, 3))
print(basicGridTraveler(3, 2))
print(basicGridTraveler(3, 3))

print(basicGridTraveler(10, 10))

# // print(gridTravelerBasic(18, 18)); // Out of order!! :(


def advancedGridTraveler(row, column, memo={}):
    memoKeys = str(row)  + '' + str(column)
    # Check the list
    if memoKeys in memo:
        return memo[memoKeys]
    if row == 1 and column == 1:
        return 1
    if row == 0 or column == 0:
        return 0
    rightApproach = advancedGridTraveler(row-1, column, memo)
    downApproach = advancedGridTraveler(row, column-1,memo)
    memo[memoKeys] = rightApproach + downApproach
    return memo[memoKeys]


print("--------Advanced Grid Traveler-------------")
print(advancedGridTraveler(1, 0))
print(advancedGridTraveler(0, 1))
print(advancedGridTraveler(1, 1))
print(advancedGridTraveler(2, 3))
print(advancedGridTraveler(3, 2))
print(advancedGridTraveler(3, 3))

print(advancedGridTraveler(10, 10))
print(advancedGridTraveler(18, 18))
