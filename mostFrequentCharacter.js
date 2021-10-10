function mostFrequentCharacter(str) {
  let mostFreq = 0; //객체 value 역할
  let strList = str.split(' ').join(''); //띄어쓰기는 빈도수에서 제외
  let obj = {}; //객체 생성을 위해..
  let freqChar = '' //리턴해줘야할 값
  for(let letter of strList){
    if(obj[letter] === undefined){
      obj[letter] = 1; //str의 첫번째 문자를 key로 만들고 value값을 1로 객체에 넣어준다.
    } else{
      obj[letter] = obj[letter] + 1; //반복문을 통해서 반복된 문자가 생기면 +1를 해준다.
    }
    if(mostFreq < obj[letter]){ //가장 많이 반복된 문자를 찾기위한 if문.
      freqChar = letter; // obj에 속해있는 value가 가장 큰 key가 freqChar에 할당.
      mostFreq = obj[letter]; //반복을 통해서 가장 높은 수가 mostFreq에 할당된다.
    }
  }
  return freqChar;
}