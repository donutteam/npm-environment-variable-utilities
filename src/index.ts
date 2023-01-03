//
// Exports
//

/**
 * Checks if all of the given environment variable names are defined.
 * 
 * @param variableNames An array of variable names that should be checked.
 * @returns Whether all the specified variable names are defined.
 * @author Loren Goodwin
 */
export function checkEnvironmentVariables(variableNames : string[]) : boolean
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
 * @param variableNames An array of variable names that are required for this process to work.
 * @author Loren Goodwin
 */
export function requireEnvironmentVariables(variableNames : string[])
{
	if (!checkEnvironmentVariables(variableNames))
	{
		process.exit(1);
	}

	console.log("[RequireEnvironmentVariables] All required variables exist!");
}