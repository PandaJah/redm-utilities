<h1 align="center">RedM Utilities</h1>

<p align="center">
  <i>Various gamemode-independent utilities.</i>
  <br>
  <br>
  <a href="https://github.com/Ascent-Gaming/redm-utilities/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat" alt="License: MIT">
  </a>
  <a href="https://github.com/Ascent-Gaming/redm-utilities/commits/master">
    <img src="https://img.shields.io/github/last-commit/Ascent-Gaming/redm-utilities.svg?style=flat" alt="Last commit">
  </a>
  <a href="">
    <img src="https://img.shields.io/github/workflow/status/Ascent-Gaming/redm-utilities/Node.js%20CI" alt="Workflow">
  </a>
</p>

## Installation

1. `clone` or download and copy this repository into your `./resources/` folder.

2. Assuming you have already install Yarn package manager, run `yarn install` from the root of the created directory.

3. Configure `config.json` to fit your use-case and build the package using `yarn run build`.

## Usage

The following outlines a few of the key features offered by this resource. All features can be configured through `config.json` file, under the `utilities` object; or used as their usage describes.

### `clearMap`

> Default value: `true`

When set to `true`, the entire *Red Dead Redemption 3* map will be uncovered.

When set to `false`, the map will be uncovered as the player transverses the world; as shown in single-player.

### `logLevel`

Provides two functions for use on the `client` and `server` that attempt to make logging more developer-friendly.

The two functions are: `utilities:logClient` and `utilities:logServer` which can be called using `emit(...)` or by using the Lua/C# alternative.

Both functions expect the same `LogEvent` object used to format a log message.

```TypeScript
type LogEvent = {
  /**
   * A string that can be any one of the following:
   *  - "debug"
   *  - "info"
   *  - "warn"
   *  - "error"
   */
  level: string,
  /**
   * An optional title used to broadly describe where a log is taking place.
   *
   * This can be the resource's name, a custom string that has meaning to you and your developers, or left blank where "client" or "server" will be substituted.
   */
  title: string,
  /**
   * The actual log text you wish to output to either the "client" or "server" console.
   */
  output: string
}
```

The `config.json` file provides a `logLevel` field which accepts the same values described above (under `level`). You can use this to *prune* certain log messages while in production or development environments. Both the `client` and `server` can be controlled independently.

## License
This product is MIT licensed. Please make sure you give credit and include this license in your product.
