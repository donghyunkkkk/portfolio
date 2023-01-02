$(document).ready(function(){
	//console.log("실행");
	//상단메뉴 배경색 조절
	//휴대폰에서는 배경색 보임
	if($(window).width() <= 600 ){
		$("nav").addClass("act");
		
	}
	//휴대폰보다 큰 화면일때는 스크롤 높이에 따라 배경색을 조절함
	else{
		const change = $("#top").height()-50;
		$(window).scroll(function(){
			if($(window).scrollTop() > change ) {
				$("nav").addClass("act");
			} else {
				$("nav").removeClass("act");
			}
		});
		
	}
	
	
	
	
	
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0"},1000);
		$(".char1").animate({opacity:"1"},2000);
	},1000);
	setTimeout(function(){
		$(".char2").animate({opacity:"1"},2000);
	},2000);
	setTimeout(function(){
		$(".char3").animate({opacity:"1"},2000);
	},3000);
	setTimeout(function(){
		$(".char4").animate({opacity:"1"},2000);
	},4000);
	setTimeout(function(){
		$(".char5").animate({opacity:"1"},2000);
	},5000);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0.3"},500);
	},1500);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0"},500);
	},1800);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0.5"},500);
	},2100);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0"});
	},2600);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0.7"});
	},3000);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"0"},1000);
	},3300);
	setTimeout(function(){
		$("#top_bg").animate({opacity:"1"},5000);
	},5000);
	
	
	
	
	/* setTimeout(function(){
		$("#top_bg").css({"backgroundImage":"url(images/bg-51.jpg)"});
	},5000); */

	
	
	
	
	
	
	//타자치는 효과
	//const $typing = "I'm getting better \n in every way every day.\n- 에밀쿠에";
	//console.log($typing[7]); 
	//const tyLen = $typing.length;
	//console.log(tyLen ); //21 개
	
	//let i = 0;
	//let txt = "";
	/* function type(){
		if(i < tyLen ){
			txt += $typing[i];
			//$("#typing").text( txt );
			document.querySelector("#typing").innerText = txt;
			i++;
			setTimeout( type, 110 );
		}
	} */
	
	//type ();
	
	//나타나는 글자
	const $typing = document.querySelector("#typing");
	console.log($typing);
	const tyLen = $typing.length;
	console.log(tyLen);
	//나타나기
	
	
	
	
	//상단 메뉴 호버 활성화 유지
	$("#menu a").click(function(){
		$(this).addClass('act').siblings().removeClass('act');
	});
	
	////About 에서 오른쪽 "skill" bar 애니메이션 채우기
	//$("#photo progress").animate({ value : 90 });
	//$("#html progress").delay(100).animate({ value : 80 });
	//$("#jquery progress").delay(200).animate({ value : 70 });
	//$("#oven progress").delay(300).animate({ value : 80 });
	
	
	//콘텐츠의 top 값을 절대값으로 얻어온다. /상대값은 position().top; 이다
	//절대값은 기준이 윈도우 / 상대값은 기준이 부모
	const homeTop = $("body").offset().top;
	const aboutTop = $("#about").offset().top;
	const port1Top = $("#port1").offset().top - 400;
	const port2Top = $("#port2").offset().top - 400;
	const port3Top = $("#port3").offset().top - 400;
	const port4Top = $("#port4").offset().top - 780;
	const eventTop = $("#event").offset().top - 400;
	const contactTop=$("#contact").offset().top - 200;
	
	//스크롤바 값 콘솔창 확인하기 전 let 설정
	let st = 0;
	let pos = 0;
	//스크롤바를 내렸을 때에 효과( 스크롤 이벤트 감지 )
	$(window).scroll(function(){
		st = $(window).scrollTop();
		//console.log(st);		
		if(st>= homeTop && st < aboutTop){
			pos = 0;
		}
		if( st>= aboutTop && st<port1Top){
			//About에서 오른쪽 "skill" bar 애니메이션
			$("#photo progress").animate({value : 70});
			$("#html progress").delay(100).animate({value : 80});
			$("#jquery progress").delay(200).animate({value : 80});
			$("#oven progress").delay(300).animate({value : 80});
			pos = 1;
		}
		if( st>= port1Top ){
			$("#port1").addClass(".act");
			pos = 2;
		}
		if( st>= port2Top ){
			$("#port2").addClass(".act");			
		}
		if( st>= port3Top ){
			$("#port3").addClass(".act");					
		}
		if( st>= port4Top){
			$("#port4").addClass(".act");
		}
		if( st>= eventTop && st<contactTop ){
			pos = 3;
		}
		if( st>= contactTop ){
			pos = 4;
		}
		$("#menu a").eq(pos).addClass('act').siblings().removeClass('act');
	});
	
	
	
	
	
	
	
	$("#event> div> div ").click(function(){
		//클릭한 썸네일이미지 주소를 가져온다
		const thumb = $(this).children("img").attr("src");
		//가져온 주소를 큰이미지주소로 변경한다.
		const change = thumb.replace( "." , "_big." );
		//변경한 이미지주소를  큰 이미지에 대입한다.
		$("#popup img").attr("src", change );
		
		//클릭한 썸네일 이미지에서 alt 값을 가져온다.
		const alt = $(this).children("img").attr("alt");
		//검정팝업 상단에 작품 제목을 대입한다.
		$("#popup h3").text( alt );

		$("#popup").fadeIn();

	});	
			
	$("#popup").click(function(){
		$(this).fadeOut();
		
	});
	
	
	
});//////////////////////////////////////////////////////////////