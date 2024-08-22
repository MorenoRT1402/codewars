[5kyu - Horse Racing]

##Story:
In ancient china, one of the general's name was Tian Ji, he often held horse races with some nobles. Two people have the same number of horses, each time one horse is chosen to fight, winner is decided by the total victory. The horses in the race have different speeds, generally can be divided into the upper, middle and lower three levels, if Tian Ji always select the same level horse race with rival horse, it's difficult to obtain the best results.

Tian Ji takes such a trick: He chose the lower level horse race with the noble's upper level horse, and chose the upper level horse race with the noble's middle level horse, at last chose the middle level horse race with the noble's lower level horse. He easily won the final victory.

##Task of this Kata:
Write a function, accept two parameters: noble(noble's horse, int array, the speed of each horse), tianji(Tian Ji's horse, int array, the speed of each horse), calculate how many times Tian Ji can win the most, returns a number (the number of wins). notes: Tian Ji and the noble have the same number of horses, and the horse can not be repeated to participate in the competition.

##Some Examples：
  noble:    [1,2,3]
             | | 
  Tian Ji:[1,2,3]
  
  2 Vs 1, 3 Vs 2, Tian Ji win 2 times
  
  noble:  [1,2,3]
           | | |
  Tian Ji:[4,5,6]
  
  Tian Ji win 3 times
  
  noble:  [4,5,6]
           | | |
  Tian Ji:[1,2,3]
  
  Tian Ji win 0 time
  
  noble:  [1,3,5]
           | | |
  Tian Ji:[2,4,6]
  
  2 Vs 1, 4 Vs 3, 6 Vs 5, Tian Ji win 3 times
  
  noble:    [2,4,6]
             | |
  Tian Ji:[1,3,5]
  
  3 Vs 2, 5 Vs 4, Tian Ji win 2 times
  
  noble:[19,73,15,54,50]==>      [15,19,50,54,73]
                                  |   |  |
  Tian Ji:[4,19,21,35,95]==>[4,19,21,35,95]
  
  95 Vs 50, 35 Vs 19, 21 Vs 15, Tian Ji win 3 times
Sometimes the problem is not as simple as the example, Please think in coding.