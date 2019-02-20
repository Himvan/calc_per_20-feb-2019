function Sum()
{
    var add=0;
    for(var i=0;i<arguments.length;i++)
    {
      add+=arguments[i];
    }
    return add;
}
Sum(1,2,3);
