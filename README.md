# Windows issue

To test run the following commands:

```sh
npm ci
npm run build -w @test/cli
npm ci # yes do this again
npm run start -w @test/bug
```

On mac, you should get the following output:

```js
{ inputPath: 'foo', outputPath: 'bar' }
```

On windows, you should notice that nothing is passed to the cli so the output is as follows:

```js
{}
```
