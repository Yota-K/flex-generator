## Flexboxとは
要素を横並びにするときに使用するプロパティです。  
親要素に対して指定します。

### HTML
```
<div id="flex-preview">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
</div>
```

### CSS
```
#flex-preview {
    display: flex;
}
```
## display: inline-flex;
インライン要素に対して使用する場合は、親要素に対してdisplay: inline-flex;を指定します。

### CSS
```
#flex-preview {
    display: inline-flex;
}
