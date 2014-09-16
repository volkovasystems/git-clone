/*:
	@module-license:
		The MIT License (MIT)

		Copyright (c) 2014 Richeve Siodina Bebedor

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-module-license

	@module-configuration:
		{
			"packageName": "git-clone",
			"fileName": "git-clone.js",
			"moduleName": "gitClone",
			"authorName": "Richeve S. Bebedor",
			"authorEMail": "richeve.bebedor@gmail.com",
			"repository": "git@github.com:volkovasystems/git-clone.git",
			"isGlobal": "true"
		}
	@end-module-configuration

	@module-documentation:
		Git clone will do one thing only, just clone the repository using https url.
	@end-module-documentation

	@include:
		{
			"work@github.com/volkovasystems": "work",
			"git-exists@github.com/volkovasystems": "gitExists",
			"fs@nodejs": "fs",
			"url@nodejs": "url"
		}
	@end-include
*/
var gitClone = function gitClone( repositoryURL, destinationDirectory, callback ){
	/*:
		@meta-configuration:
			{
				"repositoryURL:required": "string",
				"destinationDirectory": "string",
				"callback": "Callback"
			}
		@end-meta-configuration
	*/

	if( !HTTP_PROTOCOL_PATTERN.test( url.parse( repositoryURL ).protocol ) ){
		var error = new Error( "invalid url protocol used as repository url" );
		console.error( error );
		throw error;
	}

	var currentWorkingDirectory = process.cwd( );

	if( GIT_CLONE_DIRECTORY_PATTERN.test( currentWorkingDirectory ) ){
		process.chdir( "../" );
	}

	if( destinationDirectory && 
		fs.existSync( destinationDirectory )
		fs.statSync( destinationDirectory ).isDirectory( ) )
	{
		process.chdir( destinationDirectory );
		destinationDirectory = process.cwd( );

	}else{
		console.warn( "this error is shown for warning purposes only" );
		var error = new Error( "destination directory is invalid" );
		console.error( error );
		console.warn( "reverting to using the parent directory of this module as the destination directory" ); 
	}

	work( "git clone " + repositoryURL, 
		function onCloned( ){
			gitExists( destinationDirectory, callback );
		} );
};

const GIT_CLONE_DIRECTORY_PATTERN = /git-clone$/;
const HTTP_PROTOCOL_PATTERN = "/^https?:/";

var work = require( "./work/work.js" );
var gitExists = require( "./git-exists/git-exists.js" );
var fs = require( "fs" );
var url = require( "url" );

module.exports = gitClone;