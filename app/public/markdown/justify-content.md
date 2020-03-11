## justify-contentとは
子要素を配置する間隔を指定するプロパティです。  
水平方向の揃え方を指定することができます。
親要素に空きスペースがある場合のみ適用されます。  

## justify-content: start;
初期値です。  
行の開始位置から左揃えになるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    justify-content: start;
}
```

## justify-content: flex-end;
行末から右揃えになるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    justify-content: flex-end;
}
```

## justify-content: center;
中央揃えになるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    justify-content: center;
}
```

## justify-content: space-around;
全ての子要素を均等に間隔を開けて配置します。

### CSS
```
#flex-preview {
    display: flex;
    justify-content: space-around;
}
```

## justify-content: space-between;
最初と最後の子要素を両端に配置して、残りの子要素は均等に間隔を開けて配置します。

### CSS
```
#flex-preview {
    display: flex;
    justify-content: space-between;
}
```
