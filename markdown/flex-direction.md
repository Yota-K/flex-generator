## flex-directionとは
子要素をどの方向に配置するかを指定するプロパティです。  
横並びにするか、縦並びにするかを指定できます。  
あくまで子要素の並び順を変更するだけなので、文字列の記述方向などは変更されません。

## flex-direction: row;
初期値です。  
子要素を左から右に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-wrap: now;
}
```

## flex-direction: row-reverse;
子要素を右から左に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-direction: row-reverse;
}
```

## flex-direction: column;
子要素を上から下に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-direction: column;
}
```

## flex-direction: column-reverse;
子要素を下から上に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-direction: column-reverse;
}
```
