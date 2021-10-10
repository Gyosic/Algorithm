function convertListToObject(arr) {
    if(arr.length === 0){ //우선 빈배열을 입력 받으면 빈객체를 리턴하는 것을 처리
      return {};
    }
    let obj = {}; // 값을 채워줄 빈 객체 선언
    for(let i = arr.length - 1; i >= 0; i--){ //i를 배열 끝에서 부터 조회하기 시작
      if(arr[i].length === 0){ //배열 안의 배열이 빈 배열이면 그냥 패스
        continue;
      } 
      else {
        obj[arr[i][0]] = arr[i][1]; //배열 안의 배열의 첫번째 값을 key 두번째 값을 value로 저장
      }
    }     
    return obj;
  }
  