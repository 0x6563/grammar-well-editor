## Hack to trigger Grammar Well postprocess signature 
@{%  function Tree(data) { return data; }%}
## {% %} Syntax uses Nearley's postprocess signature
## ${ }  Syntax uses Grammar Well's

Chunk -> _ Block _ ${ Tree }
 
Block -> _Block ${ Tree }
	| _Block __ ReturnStat ${ Tree }
 
ReturnStat -> "return" __ ExpList ${ Tree }
	| "return" __ ExpList _ ";" ${ Tree }
 
_Block -> Statement ${ Tree }
	| _Block _ ";" _ Statement ${ Tree }
	| _Block __ Statement ${ Tree }
 
Statement ->
	VarList _ "=" _ ExpList ${ Tree }
	| FunctionCall ${ Tree }
	| Label ${ Tree }
	| "break" ${ Tree }
	| "goto" __ Name ${ Tree }
	| "do" __ Block __ "end" ${ Tree }
	| "while" __ Exp __ "do" __ Block __ "end" ${ Tree }
	| "repeat" __ Block __ "until" __ Exp ${ Tree }
	| "if" __ Exp __ "then" __ Block __ Else ${ Tree }
	| "for" __ NameList __ "in" __ ExpList __ "do" __ Block __ "end" ${ Tree }
	| "function" __ FunctionName _ FunctionBody ${ Tree }
	| "local" __ "function" __ Name __ FunctionBody ${ Tree }
	| "local" __ NameList ${ Tree }
	| "local" __ NameList _ "=" _ ExpList ${ Tree }
 
Else -> "end" ${ Tree }
	| _Else __ "end" ${ Tree }
	| _Else __ "else" __ Block __ "end" ${ Tree }
 
_Else ->       "elseif" __ Exp __ "then" __ Block ${ Tree }
	| _Else __ "elseif" __ Exp __ "then" __ Block ${ Tree }
 
Label -> "::" _ Name _ "::" ${ Tree }
 
# Names 
# See Section 2.1 
Name -> _name ${ Tree }
 
_name -> [a-zA-Z_] ${ Tree }
	| _name [\w_] ${ Tree }
 
NameList -> Name ${ Tree }
	| NameList _ "," _ Name ${ Tree }
 
Var -> Name ${ Tree }
	| PrefixExp _ "[" _ Exp _ "]" ${ Tree }
	| PrefixExp _ "." _ Name ${ Tree }
 
VarList -> Var ${ Tree }
	| VarList _ "," _ Var ${ Tree }
 
ExpList -> Exp ${ Tree }
	| ExpList _ "," _ Exp ${ Tree }
 
PrefixExp -> Var ${ Tree }
	| FunctionCall ${ Tree }
	| Parenthesized ${ Tree }
 
FunctionCall ->
	PrefixExp _ Args ${ Tree }
	| PrefixExp _ ":" _ Name _ Args ${ Tree }
 
Args ->
	"(" _ ")" ${ Tree }
	| "(" _ ExpList _ ")" ${ Tree }
	| String ${ Tree }
 
FunctionName -> _functionname ${ Tree }
	| _functionname ":" Name ${ Tree }
 
_functionname -> Name ${ Tree }
	| FunctionName _ "." _ FunctionName ${ Tree }
 
FunctionDef -> "function" __ FunctionBody ${ Tree }
 
FunctionBody -> "(" _ ParamList _ ")" __ Block __ "end" ${ Tree }
	| "(" _ ")" __ Block __ "end" ${ Tree }
 
ParamList -> NameList ${ Tree }
	| NameList _ "," _ "..." ${ Tree }
	| "..." ${ Tree }
 
# Tables
 
TableConstructor -> "{" _ FieldList _ "}" ${ Tree }
	| "{" _ "}" ${ Tree }
 
FieldList -> _FieldList ${ Tree }
	| _FieldList _ FieldSep ${ Tree }
 
_FieldList -> Field ${ Tree }
	| _FieldList _ FieldSep _ Field ${ Tree }
 
Field -> "[" _ Exp _ "]" _ "=" _ Exp ${ Tree }
	| Name _ "=" _ Exp ${ Tree }
	| Exp ${ Tree }
 
FieldSep -> "," ${ Tree }
	| ";" ${ Tree }
 
# Expressions
Exp -> Binop ${ Tree }
 
Binop -> ExpOr ${ Tree }
 
Parenthesized -> "(" Exp ")" ${ Tree }
 
 
ExpOr -> ExpOr __ "or" __ ExpAnd ${ Tree }
	| ExpAnd ${ Tree }
 
ExpAnd -> ExpAnd __ "and" __ ExpComparison ${ Tree }
	| ExpComparison ${ Tree }
 
ExpComparison ->
	  ExpComparison _ "<"  _ ExpConcatenation ${ Tree }
	| ExpComparison _ ">"  _ ExpConcatenation ${ Tree }
	| ExpComparison _ "<=" _ ExpConcatenation ${ Tree }
	| ExpComparison _ ">=" _ ExpConcatenation ${ Tree }
	| ExpComparison _ "~=" _ ExpConcatenation ${ Tree }
	| ExpComparison _ "==" _ ExpConcatenation ${ Tree }
	| ExpConcatenation ${ Tree }
 
ExpConcatenation ->
	  ExpSum _ ".." _ ExpConcatenation ${ Tree }
	| ExpSum ${ Tree }
 
ExpSum ->
	  ExpSum _ "+" _ ExpProduct ${ Tree }
	| ExpSum _ "-" _ ExpProduct ${ Tree }
	| ExpProduct ${ Tree }
 
ExpProduct ->
	  ExpProduct _ "*" _ ExpUnary ${ Tree }
	| ExpProduct _ "/" _ ExpUnary ${ Tree }
	| ExpProduct _ "%" _ ExpUnary ${ Tree }
	| ExpUnary ${ Tree }
 
ExpUnary ->
	  "not" __ ExpPow ${ Tree }
	| "#" _ ExpPow ${ Tree }
	| "-" _ ExpPow ${ Tree }
	| ExpPow ${ Tree }
 
ExpPow ->
	  Atom ${ Tree }
	| Atom _ "^" _ ExpPow ${ Tree }
 
Atom -> Number ${ Tree }
	| String ${ Tree }
	| PrefixExp ${ Tree }
	| "nil" ${ Tree }
	| "false" ${ Tree }
	| "true" ${ Tree }
	| Parenthesized ${ Tree }
	| FunctionDef ${ Tree }
	| TableConstructor ${ Tree }
 
 
 
 
 
# Primitives
# ==========
 
# Numbers
 
Number -> _number ${ Tree }
 
_posint ->
	[0-9] ${ Tree }
	| _posint [0-9] ${ Tree }
 
_int ->
	"-" _posint ${ Tree }
	| _posint ${ Tree }
 
_float ->
	_int ${ Tree }
	| _int "." _posint ${ Tree }
 
_number ->
	_float ${ Tree }
	| _float "e" _int ${ Tree }
 
 
#Strings
String -> "\"" _string "\"" ${ Tree }
 
_string ->
	null ${ Tree }
	| _string _stringchar ${ Tree }
 
_stringchar ->
	[^\\"] ${ Tree }
	| "\\" [^] ${ Tree }
 
# Whitespace
_ -> null ${ Tree }
	| _ [\s] ${ Tree }
__ -> [\s] ${ Tree }
	| __ [\s] ${ Tree }