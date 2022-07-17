# Environment Variable Utilities
A collection of various environment variable related utility functions.

This pairs great with the [dotenv](https://www.npmjs.com/package/dotenv) package.

## Installation
Install the package with NPM:

```
npm install @donutteam/environment-variable-utilities
```

## Usage
### checkEnvironmentVariables
This function checks that each of the environment variables in the given array exists and returns whether or not they all exist.

```js
import { checkEnvironmentVariables } from "@donutteam/environment-variable-utilities";

const variablesExist = checkEnvironmentVariables(
	[
		"PORT",

		"SOME_SECRET_API_KEY",
	]);
```

### requireEnvironmentVariables
This function checks that each of the environment variables in the given array exists and terminates the process if any of them are missing.

This assures that the process will not run in unexpected ways due to a missing environment variable.

```js
import { requireEnvironmentVariables } from "@donutteam/environment-variable-utilities";

requireEnvironmentVariables(
	[
		"PORT",

		"SOME_SECRET_API_KEY",
	]);
```

## License
[MIT](https://github.com/donutteam/environment-variable-utilities/blob/main/LICENSE.md)