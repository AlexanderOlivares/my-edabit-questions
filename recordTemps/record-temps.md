# Record Temperatures

You are given two arrays that each represent weather data for the days of the week `['Sunday', 'Monday', ..., 'Saturday']`.

The records array contains record low/high temperatures for that day of the week.`[[25 (record low), 102 (record high)], ...]`

The current week array contains the daily lows/highs `[[40 (daily low), 82 (daily high)], ...]` for each day of the current week.

Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures;

- there may be multiple record temperatures in a week
- if there are no broken records return the original records array

##Example

```
//             sun       mon       tues       wed      thur      fri       sat
recordTemps([[34, 82], [24, 82], [20, 89],  [5, 88],  [9, 88], [26, 89], [27, 83]],
            [[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])

➞           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]

```

The low previous record low for Monday was 24. The current week's low for Monday is 19. So 19 replaces 24 as Monday's new record low.

### Notes

- there won't be a record high and record low set on the same day
- index[0] will always be the low and index[1] will always be the high `[low, high]`
- you do not need to convert any temperatures

Skeleton func:

```
function recordTemps(records, currentWeek){

}
```
