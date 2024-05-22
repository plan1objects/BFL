$(function(){
    // 전체메뉴

    $('#shopNav').on('click', function(e){
        e.preventDefault();
        $('#g_nav_box').toggleClass('disB');
    });

    // 스크롤시 전체메뉴 접음

    $(window).scroll(function(){        
        if($(this).scrollTop() > 0){
            $('#g_nav_box').removeClass('disB');
        }
    });
    

    // 헤더픽스
    const header = $('#header');
    const headerOffsetTop = header.offset().top;

    $(window).scroll(function(){        
        if($(this).scrollTop() > headerOffsetTop){
            $('.nav_position').addClass('fix');
            $('.quickMenu').addClass('fix');
            $('#m_g_nav').addClass('fix');
        }else{
            $('.nav_position').removeClass('fix');
            $('.quickMenu').removeClass('fix');
            $('#m_g_nav').removeClass('fix');
        }
    });

    // 검색팝업

    $('.searchPopupOpen').on('click', function(e){
        e.preventDefault();
        $('#search_popup').show();
    });
    $('#search_popup .closeBtn').on('click', function(){
        $('#search_popup').hide();
    });   

    const searchTabLi = $('#search_popup .searchTab > li');
    
    searchTabLi.on('click', function(){
        $('#search_popup .searchKeyword > div').eq($(this).index()) //$(this).index() 클릭한 놈의 순번을 가져와라
        .addClass('white_font').siblings().removeClass('white_font'); 
        // 순번에 해당하는 태그만 클래스넣고 외 형제들은 클래스 다지워라.        
    });
    searchTabLi.eq(0).click(); // 0번째 애를 클릭해라.

    
    // 자동 탭
    
    const tabinput = $('[name="recommendedTab"]');
    let count = 0;

    let autoTab = setInterval(function(){
        tabinput.eq(count).prop('checked', true);
        count++;
        count %= 3;
    }, 3000);

    $('[name="recommendedTab"]').on('click', function(){
        clearInterval(autoTab);
    });

    
    // 탭 높이 잡기

    if($(window).width() <= 1024 ){
        clearInterval(autoTab);
    }else{
        let recommendedHeight = $('#recommended-tab').height();
        let recommendedBox = $('#recommended-tab .tab_box').height();
        $('#recommended-tab').height(recommendedHeight + recommendedBox + 70);
    }


    // 남은시간 ~ (n원) 삭제

    const discountPeriod = document.querySelectorAll('#refurbish .layerDiscountPeriod .content p strong');

    discountPeriod.forEach(function(el,idx){
        let content = el.textContent;
        content = content.replace('남은시간 ', '');
        
        content = content.replace(/\((\d,\d+원 할인|\d+원 할인)\)/g, '');
        el.textContent = content;
    
        const matchResult = content.match(/(\d+일)/);
        if (matchResult) {
            // 추출한 결과가 있다면 span 태그로 감싸서 content를 갱신
            const remainingTime = matchResult[1];
            const spanElement = document.createElement('span');
            spanElement.textContent = remainingTime;
            el.innerHTML = content.replace(/(\d+일)/, spanElement.outerHTML);
        }
    
    });

    // refurbishPer의 텍스트에서 % 문자만 추출하여 span 태그에 담기

    const refurbishPer = document.querySelectorAll('#refurbish .salePer');
    
    refurbishPer.forEach(element => {
        const percentageText = element.textContent; // 텍스트 내용 가져오기
        const percentageValue = parseFloat(percentageText); // 텍스트를 부동 소수점 숫자로 변환

        if (!isNaN(percentageValue)) { // 변환이 성공했는지 확인
            const percentSpan = document.createElement('span'); // 새로운 span 요소 생성
            percentSpan.textContent = '%'; // span 요소에 % 문자 추가

            // 기존 텍스트 노드를 대체하기 위해 span 요소로 교체
            element.innerHTML = ''; // 기존 텍스트 삭제
            element.appendChild(document.createTextNode(percentageValue)); // 숫자 텍스트 추가
            element.appendChild(percentSpan); // % 문자 span 추가
        }

    });



    $(window).resize(function(){
        if($(window).width() <= 1024 ){
            clearInterval(autoTab);
        }else{

        }
    });

});
