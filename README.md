AngularJS1 "@uirouter" Parent Child State Demo
==============================================

当一个state的名字形如`a.b`的时候，它是state `a`的子state.

当渲染`a.b`这个子state时，它会先渲染`a`这个父state，然后在`a`的template中包括的`<ui-view>`中，
再继续渲染`a.b`对应的template。

如果state `a`中的template中没有`<ui-view>`，那么`a.b`对应的template将无处渲染。

```
npm install
npm run demo
```

Documentation
-------------

- <https://ui-router.github.io/guide/views>
