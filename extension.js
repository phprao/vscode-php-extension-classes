// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "php-extension-classes" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('php-extension-classes.helloWorld', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from PHP Extension Classes!');
	});
	context.subscriptions.push(disposable);

	// 统计选中代码的字符数
	let showNumber = vscode.commands.registerCommand('php-extension-classes.showNumber', function () {
		let editor = vscode.window.activeTextEditor; // 获取编辑器编辑区
		if (!editor) { return; }
		let selection = editor.selection;// 获取选择
		let text = editor.document.getText(selection);
		// 显示通知
		vscode.window.showInformationMessage('选择的字数：' + text.length);
	});
	context.subscriptions.push(showNumber);

	// 也可以引入外部文件，统计输入了多少字符
	var WordCounter = require('./wordCounter.js');
	var counter = new WordCounter(vscode);
	context.subscriptions.push(counter);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
