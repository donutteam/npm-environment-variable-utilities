//
// Exports
//

/**
 * Checks if all of the given variable names are specified.
 * 
 * @param {Array<String>} variableNames An array of variable names that should be checked.
 * @returns {Boolean} Whether or not all of the variables existed.
 * @author Loren Goodwin
 */
export function checkEnvironmentVariables(variableNames)
{
	let numMissing = 0;

	for (const variableName of variableNames)
	{
		if (process.env[ variableName ] == undefined)
		{
			console.error(`[CheckEnvironmentVariables] Missing variable: ${ variableName }`);
			
			numMissing += 1;
		}
	}

	return numMissing == 0;
}

/**
 * Requires that all of the given environment variable names exist and terminates the process if they don't.
 * 
 * @param {Array<String>} variableNames An array of variable names that are required for this process to work.
 * @author Loren Goodwin
 */
export function requireEnvironmentVariables(variableNames)
{
	if (!checkEnvironmentVariables(variableNames))
	{
		process.exit(1);
	}

	console.log("[RequireEnvironmentVariables] All required variables exist!");
}