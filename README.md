# diff-tree

[`git diff`](https://git-scm.com/docs/git-diff) in [`tree`](http://mama.indstate.edu/users/ice/tree/) form.

Get a better idea of structure changes caused by a feature branch.

Instead of looking at a list of files like this:
```
M  dir0/foo.js
A  dir1/dirA/bar.js
A  dir1/baz.js
```
See them like this:
```
  /
  ├── dir0
M │   └── foo.js
  └── dir1
      ├── dirA
A     │   └── bar.js
A     └── baz.js
```

### Usage
```
git checkout <my-feature-branch>
diff-tree
```

`diff-tree` will diff the currently checked out branch against `master` unless a branch is specified:
```
diff-tree <diff-current-branch-against-me>
```

### Installing

Install with npm
```
npm install --global diff-tree
```

## Authors

* **Sean Spearman** - *Initial work* - [Bates550](https://github.com/Bates550)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)
