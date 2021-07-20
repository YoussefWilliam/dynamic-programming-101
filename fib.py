# In here im creating a fib method, one with an exponentioal time complexity
# and the other is using memoization for dynamic programming

def fib(n):
    if (n<=2):
        return 1
    return fib(n-1) + fib(n-2)





def advancedFib(n, memo={}):
    if n in memo:
        return memo[n]
    if (n<=2):
        return 1
    memo[n] = advancedFib(n-1, memo) + advancedFib(n-2, memo)
    return memo[n] 

print(advancedFib(50))
