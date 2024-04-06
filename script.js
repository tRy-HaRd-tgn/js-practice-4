function prog1()
{   
    let mas = []; // исходный массив адресов
    let n = prompt("введите количество элементов массива");
    for(let i = 0;i<n;++i)
    {
        let temp = prompt("введите элемент массива");
        mas.push(temp);
    }
    let mas_b=[]; // массив адресов в черном списке
    let n_b=prompt("введите количество ");
    for(let i=0;i<n_b;++i)
    {
        let temp = prompt("введите элемент массива черного списка")   
        mas_b.push(temp);     
    }
    let flag = false;
    let out = [];
    for(let i=0;i<n;++i)
    {
        for(let j=0;j<n_b;++j)
        {
            if(mas[i]==mas_b[j])
            {
                flag = true;
                break;
            }     
        }
        if(flag==false)
        {
            out.push(mas[i]);
        }
        else{
            flag=false;
        }
    }
    for(let i =0;i< out.length;++i)
    {
        console.log(out[i]);
    }

}
//prog1();

function prog2()
{
    let sum=prompt("Введите начальную сумму корзины");
    let n = prompt("Введите количество товаров");
    let skid= prompt("Введите скидку")
    if(skid == "ДАРИМ300")
    {
        sum-=300;
        if(sum < 0){sum=0}
    }
    if(n>=10)
    {
        let temp = sum/100*5;
        sum-=temp;
    }
    if(sum > 50000)
    {
        let temp = sum - 50000;
        temp=temp/100 *20;
        sum-=temp;        
    }
    if(skid == "СКИДКА15" && sum >=20000)
    {
        let temp = sum/100 * 15;
        sum -=temp
    }
    console.log(sum)
}
prog2();