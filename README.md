# byu-layouts
A collection of layout components.

Demo site at <a href="https://cdn.byu.edu/byu-layouts/latest/demo/index.html">https://cdn.byu.edu/byu-layouts/latest/demo/index.html</a>

## To Use:

Default styling will be a uniform layout, to use the layout apply the `<byu-card-layout></byu-card-layout>` tags with the `<byu-card></byu-card>`
tags in the layout as demonstrated below.

```
<byu-card-layout>
            <byu-card>
                <img src="https://byu.edu/sites/default/files/2018-03/Downloaded44_1215.jpg">
                <h2>Title of Page Here 1</h2>
            </byu-card>

            <byu-card>
                <img src="https://byu.edu/sites/default/files/2018-03/Downloaded44_1215.jpg">
                <h2>Title of Page Here 2</h2>
            </byu-card>
</byu-card-layout>
```
For a non-uniform layout apply the non-layout attribute to the laout tag `<byu-card-layout non-uniform></byu-card-layout>`
