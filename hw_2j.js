var term = 
{
    France:12,
    Italy:21,
    Russia:10
}
let sumTempr = 0;
let count = 0
let sum = 0
let max = 0
for (let t in term) 
{
    count++
    sumTempr += term[t];
}
sum = sumTempr/count;  
     for (let t in term) 
     {
         if (term[t] > max) 
        {
         max = term[t]; 
        }
     };
     document.write('<span class = "sp">' + " Максимальное значение: " + max + '</span>');
     document.write('<br><span class = "sp">'+" Среднее значение: "+ sum + '</span>');
     