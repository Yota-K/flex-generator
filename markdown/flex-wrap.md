## flex-wrapとは
子要素を一行に並べるか、複数行に並べるかを指定するときに使用するプロパティです。  
子要素が親要素の幅を超えた場合は、折り返して複数行に配置されます。

## flex-wrap: nowrap;
初期値です。  
子要素を折り返さずに一行に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-wrap: nowrap;
}
```

## flex-wrap: wrap;
子要素は折り返して、複数行に上から下に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-wrap: wrap;
}
```

## flex-wrap: wrap-reverse;
子要素は折り返して、複数行に下から上に並べます。

### CSS
```
#flex-preview {
    display: flex;
    flex-wrap: wrap-reverse;
}
```
