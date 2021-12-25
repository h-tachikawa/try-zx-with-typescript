# try-zx-with-typescript
A demonstration of [zx](https://github.com/google/zx) with TypeScript.

## Usage
```zsh
$ npm start
> try-zx-with-typescript@1.0.0 start /Users/tachikawa/github-projects/try-zx-with-typescript
> node --loader ts-node/esm script.ts

(node:19293) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
ProcessOutput {
  stdout: 'total 112\n' +
  'drwxr-xr-x  12 tachikawa  staff    384 12 25 21:19 .\n' +
  'drwxr-xr-x  34 tachikawa  staff   1088 12 25 21:19 ..\n' +
  'drwxr-xr-x  12 tachikawa  staff    384 12 25 21:25 .git\n' +
  '-rw-r--r--   1 tachikawa  staff     81 12 25 21:22 .gitignore\n' +
  'drwxr-xr-x   9 tachikawa  staff    288 12 25 21:24 .idea\n' +
  '-rw-r--r--   1 tachikawa  staff     45 12 25 21:10 .prettierrc\n' +
  '-rw-r--r--   1 tachikawa  staff    124 12 25 21:19 README.md\n' +
  'drwxr-xr-x  71 tachikawa  staff   2272 12 25 20:57 node_modules\n' +
  '-rw-r--r--   1 tachikawa  staff  23710 12 25 20:57 package-lock.json\n' +
  '-rw-r--r--   1 tachikawa  staff    368 12 25 21:25 package.json\n' +
  '-rw-r--r--   1 tachikawa  staff    139 12 25 21:13 script.ts\n' +
  '-rw-r--r--   1 tachikawa  staff  10996 12 25 20:48 tsconfig.json\n',
  stderr: '',
  exitCode: 0

```
