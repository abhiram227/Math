function adduser(){
    player1_name=document.getElementById("Player1_Name").value
    player2_name=document.getElementById("Player2_Name").value
    localStorage.setItem("Player1_Name",Player1_Name)
    localStorage.setItem("Player2_Name",Player2_Name)
    window.location="math_page.html"
    
}