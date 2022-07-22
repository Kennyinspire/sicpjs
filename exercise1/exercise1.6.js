function sqrt_iter(guess, x) {
    return conditional(is_good_enough(guess, x),
    guess,
    sqrt_iter(improve(guess, x),
    x));
    }
  
  /**  Question: What happens when Alyssa attempts to use this to compute square roots? Explain.
   

  Answer: The function would check if the guess is good enough to execute the square-root. 
  If it is good enough, it would return the guess value. 
  Else, if not good enough, it would execute the sqrt_iter function to the guess value.
  

  */