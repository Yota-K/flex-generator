## align-contentとは
子要素が複数行に渡った場合の垂直方向の揃え方を指定します。  
`flex-wrap: nowrap;`がすでに使用されていると、子要素が一行になるため、align-content は無効になります。

## align-content: normal;
初期値です。  
既定の位置に寄せて配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-content: normal;
}
```

## align-content: flex-start;
親要素の開始位置から配置され、上揃えになります。

### CSS
```
#flex-preview {
    display: flex;
    align-content: flex-start;
}
```

## align-content: flex-end;
親要素の下部から配置され、下揃えになります。

### CSS
```
#flex-preview {
    display: flex;
    align-content: flex-end;
}
```

## align-content: center;
中央揃えになるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-content: center;
}
```

## align-content: space-around;
上下端、全ての子要素を均等に間隔を開けて配置します。

### CSS
```
#flex-preview {
    display: flex;
    align-content: space-around;
}
```

## align-content: space-between;
最初と最後の子要素を上下の端に配置して、残りの子要素は均等に間隔を開けて配置します。

### CSS
```
#flex-preview {
    display: flex;
    align-content: space-between;
}
```
