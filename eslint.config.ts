import js from '@eslint/js';
// @ts-ignore
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import type { AST, ESLint, Linter, Rule } from 'eslint';

const semicolonRule: Rule.RuleModule = {
	meta: {
		type: 'problem',
		docs: {
			description:
				'Enforce semicolons after control structures with multiple statements'
		},
		fixable: 'code',
		messages: {
			missingSemicolon:
				'Missing semicolon after closing brace of multi-statement block'
		}
	},
	create: (context) => {
		if (context.filename.endsWith('.d.ts')) return {};
		const sourceCode = context.sourceCode;

		const reportMissingSemicolon = (
			node: Rule.Node,
			lastToken: AST.Token
		) => {
			const nextToken = sourceCode.getTokenAfter(lastToken);
			if (!nextToken || nextToken.value !== ';')
				context.report({
					node,
					messageId: 'missingSemicolon',
					fix: (fixer: Rule.RuleFixer) =>
						fixer.insertTextAfter(lastToken, ';')
				});
		};

		const checkControlStructure = (node: Rule.Node) => {
			const body =
				node.type === 'IfStatement'
					? node.consequent
					: 'body' in node &&
						  node.body &&
						  !Array.isArray(node.body) &&
						  'type' in node.body
						? (node.body as Rule.Node)
						: null;
			// Check if the body is a BlockStatement (single or multiple statements)
			if (body?.type === 'BlockStatement' && body.body?.length >= 1) {
				const tokens = sourceCode.getTokens(node);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};

			// For IfStatements, also check the else block (alternate)
			if (node.type === 'IfStatement' && node.alternate) {
				const alternate = node.alternate;
				// Only check if it's a BlockStatement (else { ... }), not else if
				if (
					alternate?.type === 'BlockStatement' &&
					alternate.body?.length >= 1
				) {
					const tokens = sourceCode.getTokens(alternate);
					const lastToken = tokens[tokens.length - 1];

					if (lastToken && lastToken.value === '}')
						reportMissingSemicolon(
							alternate as unknown as Rule.Node,
							lastToken
						);
				};
			};
		};

		const checkTryStatement = (node: Rule.Node) => {
			if (node.type !== 'TryStatement') return;
			// TryStatement has block, handler, and finalizer properties
			// Check the last child (could be finalizer or handler)
			const tokens = sourceCode.getTokens(node);
			const lastToken = tokens[tokens.length - 1];

			if (lastToken && lastToken.value === '}')
				reportMissingSemicolon(node, lastToken);
		};

		const checkFunctionDeclaration = (node: Rule.Node) => {
			if (node.type !== 'FunctionDeclaration') return;
			const body = node.body;
			// Check if the body is a BlockStatement (single or multiple statements)
			if (body?.type === 'BlockStatement' && body.body?.length >= 1) {
				const tokens = sourceCode.getTokens(body);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		const checkMethodDefinition = (node: Rule.Node) => {
			if (node.type !== 'MethodDefinition') return;
			const body = node.value?.body;
			// Check if the body is a BlockStatement (single or multiple statements)
			if (body?.type === 'BlockStatement' && body.body?.length >= 1) {
				const tokens = sourceCode.getTokens(body);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		const checkClassDeclaration = (node: Rule.Node) => {
			if (node.type !== 'ClassDeclaration') return;
			const body = node.body;
			// Class body is always a ClassBody with body array
			if (body?.type === 'ClassBody' && body.body?.length >= 0) {
				const tokens = sourceCode.getTokens(node);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		const checkWithStatement = (node: Rule.Node) => {
			if (node.type !== 'WithStatement') return;
			const body = node.body;
			if (body?.type === 'BlockStatement' && body.body?.length >= 1) {
				const tokens = sourceCode.getTokens(node);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		const checkArrowFunctionExpression = (node: Rule.Node) => {
			if (node.type !== 'ArrowFunctionExpression') return;
			const body = node.body;
			// Only check if body is a BlockStatement (not expression body)
			// AND if the arrow function is part of a variable declaration or export
			// (not a callback argument to another function)
			const parent = node.parent;
			const isVariableDeclaration = parent?.type === 'VariableDeclarator';
			const isExportDeclaration =
				parent?.type === 'ExportNamedDeclaration' ||
				parent?.type === 'ExportDefaultDeclaration';
			const isAssignment = parent?.type === 'AssignmentExpression';

			// Only enforce semicolon if it's a statement-like context
			if (
				(isVariableDeclaration ||
					isExportDeclaration ||
					isAssignment) &&
				body?.type === 'BlockStatement' &&
				body.body?.length >= 1
			) {
				const tokens = sourceCode.getTokens(body);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		const checkFunctionExpression = (node: Rule.Node) => {
			if (node.type !== 'FunctionExpression') return;
			const body = node.body;
			// Similar check for function expressions - only enforce semicolon in statement contexts
			const parent = node.parent;
			const isVariableDeclaration = parent?.type === 'VariableDeclarator';
			const isExportDeclaration =
				parent?.type === 'ExportNamedDeclaration' ||
				parent?.type === 'ExportDefaultDeclaration';
			const isAssignment = parent?.type === 'AssignmentExpression';

			if (
				(isVariableDeclaration ||
					isExportDeclaration ||
					isAssignment) &&
				body?.type === 'BlockStatement' &&
				body.body?.length >= 1
			) {
				const tokens = sourceCode.getTokens(body);
				const lastToken = tokens[tokens.length - 1];

				if (lastToken && lastToken.value === '}')
					reportMissingSemicolon(node, lastToken);
			};
		};

		return {
			'IfStatement:exit': checkControlStructure,
			'ForStatement:exit': checkControlStructure,
			'ForInStatement:exit': checkControlStructure,
			'ForOfStatement:exit': checkControlStructure,
			'WhileStatement:exit': checkControlStructure,
			'DoWhileStatement:exit': checkControlStructure,
			'TryStatement:exit': checkTryStatement,
			'SwitchStatement:exit': checkControlStructure,
			'FunctionDeclaration:exit': checkFunctionDeclaration,
			'MethodDefinition:exit': checkMethodDefinition,
			'ClassDeclaration:exit': checkClassDeclaration,
			'WithStatement:exit': checkWithStatement,
			'ArrowFunctionExpression:exit': checkArrowFunctionExpression,
			'FunctionExpression:exit': checkFunctionExpression
		};
	}
};

const unnecesaryCurlyRule: Rule.RuleModule = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Remove unnecessary curly braces for single-statement blocks'
		},
		fixable: 'code',
		messages: {
			unnecessaryBraces:
				'Unnecessary curly braces for single-statement block. Remove them.'
		}
	},
	create: (context) => {
		const checkSingleStatement = (node: Rule.Node) => {
			const body =
				node.type === 'IfStatement'
					? node.consequent
					: 'body' in node &&
						  node.body &&
						  !Array.isArray(node.body) &&
						  'type' in node.body
						? (node.body as Rule.Node)
						: null;
			// Check if body is a block with a single statement
			if (body?.type === 'BlockStatement' && body.body?.length === 1)
				context.report({
					node: body,
					messageId: 'unnecessaryBraces'
				});
		};

		return {
			'IfStatement:exit': checkSingleStatement,
			'ForStatement:exit': checkSingleStatement,
			'ForInStatement:exit': checkSingleStatement,
			'ForOfStatement:exit': checkSingleStatement,
			'WhileStatement:exit': checkSingleStatement,
			'DoWhileStatement:exit': checkSingleStatement
		};
	}
};

const avoidForEachRule: Rule.RuleModule = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Avoid forEach, use for...of instead when index is not needed'
		},
		messages: {
			avoidForEach:
				'Avoid using forEach. Use for...of loop instead when the index is not needed.'
		}
	},
	create: (context) => {
		return {
			'CallExpression:exit': (node: Rule.Node) => {
				if (node.type !== 'CallExpression') return;
				// Check if this is a forEach call
				if (
					node.callee?.type === 'MemberExpression' &&
					node.callee.property.type === 'Identifier' &&
					node.callee.property.name === 'forEach' &&
					node.arguments?.length > 0
				) {
					const callback = node.arguments[0];
					// Check if callback has only one parameter (not using index/key)
					if (
						(callback?.type === 'ArrowFunctionExpression' ||
							callback?.type === 'FunctionExpression') &&
						callback?.params?.length === 1
					)
						context.report({
							node,
							messageId: 'avoidForEach'
						});
				};
			}
		};
	}
};

const funcStyleExpressionRule: Rule.RuleModule = {
	meta: {
		type: 'suggestion',
		docs: {
			description:
				'Enforce function expressions (arrow functions) over function declarations'
		},
		fixable: 'code',
		messages: {
			useArrowFunction: 'Expected a function expression (arrow function).'
		}
	},
	create: (context) => {
		if (context.filename.endsWith('.d.ts')) return {};
		const sourceCode = context.sourceCode;

		return {
			'FunctionDeclaration:exit': (node: Rule.Node) => {
				if (node.type !== 'FunctionDeclaration') return;
				const funcNode = node as unknown as {
					id: { name: string; range: [number, number] } | null;
					params: { range: [number, number] }[];
					body: { type: string; range: [number, number] };
					returnType: { range: [number, number] } | undefined;
					generator: boolean;
					async: boolean;
					range: [number, number];
				};
				if (!funcNode.id) return;
				const funcName = funcNode.id.name;
				const bodyStart = funcNode.body.range[0];

				// Determine the end of params (before return type annotation if present)
				// Use the return type start if available, otherwise use body start
				let paramsEnd: number;
				if (funcNode.returnType)
					paramsEnd = funcNode.returnType.range[0];
				else if (funcNode.params.length > 0)
					paramsEnd =
						funcNode.params[funcNode.params.length - 1].range[1];
				else
					// No params, find the closing paren from the source
					paramsEnd = bodyStart;

				// Get params text from source
				let paramsText = '';
				if (funcNode.params.length > 0)
					paramsText = sourceCode
						.getText()
						.slice(
							funcNode.params[0].range[0],
							funcNode.params[funcNode.params.length - 1].range[1]
						);

				// Find the start of 'function' keyword
				const functionToken = sourceCode.getFirstToken(node);
				if (!functionToken) return;

				// Check for async by looking at the token before 'function'
				const tokenBeforeFunc =
					sourceCode.getTokenBefore(functionToken);
				const isAsync = tokenBeforeFunc?.value === 'async';

				// The range to replace: from 'async' (if present) or 'function' to end of params
				const replaceStart =
					isAsync && tokenBeforeFunc
						? tokenBeforeFunc.range[0]
						: functionToken.range[0];

				context.report({
					node,
					messageId: 'useArrowFunction',
					fix: (fixer: Rule.RuleFixer) => {
						const asyncPrefix = isAsync ? 'async ' : '';
						const replacement = `const ${funcName} = ${asyncPrefix}(${paramsText}) => `;
						return fixer.replaceTextRange(
							[replaceStart, paramsEnd],
							replacement
						);
					}
				});
			}
		};
	}
};

const config: Linter.Config[] = [
	{
		ignores: ['dist', 'node_modules', '*.js', '**/*.js', 'supabase']
	},
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: 'module',
				projectService: true
			},
			globals: {
				console: 'readonly',
				process: 'readonly'
			}
		},
		plugins: {
			'@typescript-eslint': tsPlugin as unknown as ESLint.Plugin,
			custom: {
				rules: {
					'semicolon-after-control': semicolonRule,
					'no-unnecessary-braces': unnecesaryCurlyRule,
					'avoid-forEach': avoidForEachRule,
					'func-style-expression': funcStyleExpressionRule
				}
			}
		},
		rules: {
			...js.configs.recommended.rules,
			'@typescript-eslint/explicit-module-boundary-types': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' }
			],
			'jsx-quotes': ['error', 'prefer-single'],
			'@typescript-eslint/no-namespace': 'off',
			'no-console': 'off',
			'no-undef': 'off',
			semi: ['error', 'always'],
			quotes: ['error', 'single'],
			indent: ['error', 'tab'],
			'comma-dangle': ['error', 'never'],
			curly: 'off',
			'custom/no-unnecessary-braces': 'error',
			'no-trailing-spaces': 'error',
			'custom/semicolon-after-control': 'error',
			'custom/func-style-expression': 'error'
		}
	}
];

export default config;
