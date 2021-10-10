function letterCapitalize(str) { 
    let strSplit = str.split(' '); //띄어쓰기로 구분해서 배열로 변환
    let result = []; //반복문을 통해 만들 결과를 저장시킬 값 선언
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i] === ''){ //연속된 공백이 있을 수 있다고 했으니, 배열의 요소 중에 빈 문자열을 걸러준다.
        result = result.concat('')//빈 문자열(공백)을 그대로 result에 넣어준다.
      } else {
        result = result.concat(strSplit[i][0].toUpperCase()+strSplit[i].slice(1)) // 첫글자를 대문자로 바꾸고 result에 넣어준다.
      }
    }
    return result.join(' '); // 다시 띄어쓰기로 구분해서 문자열로 합쳐준다.
  }