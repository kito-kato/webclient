function Search() {
    var name1 = document.getElementById("id1");

    let name = name1.value.replace(/ /g, "");

    if(name == "김치사발면"){
        window.location.href = "001.html"
    }

    else if(name == "너구리"){
        window.location.href = "002.html"
        }
        
    else if(name == "무파마"){
        window.location.href = "003.html"
        }

    else if(name == "사리곰탕"){
        window.location.href = "004.html"
        }

    else if(name == "새우탕"){
        window.location.href = "005.html"
        }

    else if(name == "신라면"){
        window.location.href = "006.html"
        }

    else if(name == "안성탕면"){
        window.location.href = "007.html"
        }
    
    else if(name == "오징어짬뽕"){
        window.location.href = "008.html"
        }
    
    else if(name == "우육탕"){
        window.location.href = "009.html"
        }

    else if(name == "육개장"){
        window.location.href = "010.html"
        }

    else if(name == "짜파게티"){
        window.location.href = "011.html"
        }

    else if(name == "튀김우동"){
        window.location.href = "012.html"
        }

    else if(name == "간짬뽕"){
        window.location.href = "013.html"
        }

    else if(name == "나가사끼짬뽕"){
        window.location.href = "014.html"
        }

    else if(name == "맛있는라면"){
        window.location.href = "015.html"
        }

    else if(name == "불닭볶음면"){
        window.location.href = "016.html"
        }

    else if(name == "삼양라면"){
        window.location.href = "017.html"
        }

    else if(name == "라면볶이"){
        window.location.href = "018.html"
        }

    else if(name == "스낵면"){
        window.location.href = "019.html"
        }

    else if(name == "스파게티"){
        window.location.href = "020.html"
        }

    else if(name == "열라면"){
        window.location.href = "021.html"
        }
        
    else if(name == "진라면"){
        window.location.href = "022.html"
        }

    else if(name == "진짜장"){
        window.location.href = "023.html"
        }

    else if(name == "진짬뽕"){
        window.location.href = "024.html"
        }

    else if(name == "짜장볶이"){
        window.location.href = "025.html"
        }

    else if(name == "참깨라면"){
        window.location.href = "026.html"
        }

    else if(name == "치즈볶이"){
        window.location.href = "027.html"
        }

    else if(name == "꼬꼬면"){
        window.location.href = "028.html"
        }

    else if(name == "도시락"){
        window.location.href = "029.html"
        }

    else if(name == "왕뚜껑"){
        window.location.href = "030.html"
        }

    else {
        if(name == "") {
            alert('검색어를 입력해주세요!');
        }
        else {
            alert('리스트에 없습니다!')
        }
    }
}



function GoToMenu() {
    window.location.href = "menu.html"
}
