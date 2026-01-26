// 은행(Bank) 클래스가 존재한다. 
// 회원(Member)들에게 관리비를 5만원 가져가야하는 경우
// 1. 회원이 가진 돈에서 5만원을 빼야한다.
// 2. 은행에 5만원을 추가해야한다.

class Benk{
  members;
  useFee; //사용료
  fund; //자산

  constructor(yourName, fund, useFee)
  {
    this.yourName = yourName;
    this.fund = fund;
    this.useFee = useFee;
    this.members = new Array();
  }

  RegistMember(member)
  {
    if(member.money >= 50000)
    {
      this.members.push(member);
      member.money -= 50000;
      this.fund += 50000;
    }
    else
    {
      console.log(`${member.yourName}님은 돈이 부족하여 가입할 수 없습니다.`);
    }
  }

  PrintInformation()
  {
    console.log(`${this.yourName}은행은 멤버는 총 ${this.members.length}명, 자산은 ${this.fund}원, 관리비는 ${this.useFee}원`);
    
    this.members.forEach((data) => {
      data.PrintInformation();
    });
  }
}

class member{
  yourName;
  money;

  constructor(yourName, money)
  {
    this.yourName = yourName;
    this.money = money;
  }

  PrintInformation(){
    console.log(`이름 : ${this.yourName}, 돈 : ${this.money}`);
  }
}

const benk = new Benk("요주 라이벌은행", 40000, 50000);

const member1 = new member("URA", 1000000);
const member2 = new member("Ayuuu", 2000000);
const member3 = new member("Danon", 3000000);
const member4 = new member("Kusuno", 4000000);
const member5 = new member("kurimo", 5000000);

benk.RegistMember(member1);
benk.RegistMember(member2);
benk.RegistMember(member3);
benk.RegistMember(member4);
benk.RegistMember(member5);

benk.PrintInformation();