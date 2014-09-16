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
			"work@github.com/volkovasystems": "work"
		}
	@end-include
*/
var gitClone = function gitClone( repositoryURL, callback ){
	/*:
		@meta-configuration:
			{
				"repositoryURL:required": "string",
				"callback": "Callback"
			}
		@end-meta-configuration
	*/

	work( "git clone " + repositoryURL, callback );
};

var work = require( "./work/work.js" );

module.exports = gitClone;