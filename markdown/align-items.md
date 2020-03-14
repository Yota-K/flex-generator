## align-itemsとは
子要素を配置する間隔を指定するプロパティです。  
垂直方向の揃え方を指定することができます。
親要素に空きスペースがある場合のみ適用されます。  

## align-items: normal;
初期値です。  
幅や高さの範囲内でラインと同じになるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-items: normal;
}
```

## align-items: center;
要素全体が親要素の中央に配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-items: center;
}
```
## align-items: flex-start;
要素全体が親要素の上部に配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-items: flex-start;
}
```
## align-items: flex-end;
要素全体が親要素の下部に配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-items: flex-end;
}
```
## align-items: baseline;
全ての要素は、ベースラインと一直線になるように配置されます。

### CSS
```
#flex-preview {
    display: flex;
    align-items: baseline;
}
```
