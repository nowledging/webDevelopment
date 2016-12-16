// 1.for循环
var a = "Hi my name is Han Meimei, a SOFTWARE engineer"; //公用字符串

function titleCase(s){
	var i,ss = s.toLowerCase().split(/\s+/);
	for(i= 0;i < ss.length;i++){
		ss[i] = ss[i].slice(0,1).toUpperCase()+ss[i].slice(1);
	}
	return ss.join();
}
console.log(titleCase(a));

// 2. for循环 +replace
function titleCase(str){
	var convertToArray = str.toLowerCase().split(" ");
	for(var i = 0;i < convertToArray.length;i++){
		var char= convertToArray[i].charAt(0);
		convertToArray[i] = convertToArray[i].replace(char,function replace(char){
			return char.toUpperCase();
		})
	}
	return convertToArray.join(" ");
}
console.log(titleCase(a));

//3. 正则+replace
function titleCase(s){
	return s.toLowerCase().replace(/\b([\w|`]+)\b/g,function(word){
		  return word.replace(word.charAt(0),word.charAt(0).toUpperCase());
	});
}
console.log(titleCase(a));
//这里把简单的字母，数字，下滑线和单撇号都是为了单词成员

//4. 数组+map
function titleCase(s){
	return s.toLowerCase().split(/\s+/).map(function(item,index){
		return item.slice(0,1).toUpperCase + item.slice(1);
	}).join('');
}
console.log(titleCase(a));

//5. 数组 +reduce
function titleCase(s){
	return s.toLowerCase().split(/\s+/).reduce(function(prev,item,array,array){
		return prev + (prev.trim()&&'') + item.slice(0,1).toUpperCase() + item.slice(1);
	},'');
}
console.log(titleCase(a));


//6. ES6写法
 function titleCase(str){
 	return str.toLowerCase().replace(/(|^)[a-z]/g,(L) =>L.toUpperCase());
 }
 cnsole.log(titleCase(a));