hour1 = document.getElementById("hour1")
hour2 = document.getElementById("hour2")
dot1 = document.getElementById("dot1")
min1 = document.getElementById("min1")
min2 = document.getElementById("min2")
dot2 = document.getElementById("dot2")
sec1 = document.getElementById("sec1")
sec2 = document.getElementById("sec2")

display = (e, number) => {
    var link = "./img/" + "0" + number + ".gif"
    console.log(link)
    e.style.backgroundImage = "url(" + link + ")"
    e.style.backgroundSize = "cover"
}

displayCapture = (e) => {
    var link = "./img/haicham.gif"
    console.log(link)
    e.style.backgroundImage = "url(" + link + ")"
    e.style.backgroundSize = "cover"
}

let date = new Date();
h = date.getHours().toString()
m = date.getMinutes().toString()
s = date.getSeconds().toString()
if(h.length == 1){
    display(hour1, 0)
    display(hour2, h[0])
}else{
    display(hour1, h[0])
    display(hour2, h[1])
}
displayCapture(dot1)
if(m.length == 1){
    display(min1, 0)
    display(min2, m[0])
}else{
    display(min1, m[0])
    display(min2, m[1])
}

displayCapture(dot2)

if(s.length == 1){
    display(sec1, 0)
    display(sec2, s[0])
}else{
    display(sec1, s[0])
    display(sec2, s[1])
}
if(h>=17 && h<24){
    document.getElementById('evening').textContent = 'Chào buổi tối'
}
if(h>=0 && h<12){
    document.getElementById('morning').textContent = 'Chào buổi sáng'
}
if(h>=12 && h<17){
    document.getElementById('afternoon').textContent = 'Chào buổi chiều'
}
